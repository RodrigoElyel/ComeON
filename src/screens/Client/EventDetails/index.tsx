import { View, TouchableOpacity, FlatList, Image } from "react-native";
import React from "react";

// Components
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import Screen from "../../../components/Screen";
import EventDetails from "../../../components/Cards/EventDetails";

//Icons
import { Ionicons } from "@expo/vector-icons";

// Services
import { formatCurrency } from "../../../services/Utils/money";

// Styled-Component
import * as S from "./styles";

// Styles
import STYLES from "../../../styles";

// Image
import ImageDetails from "../../../assets/imageDetails.png";
// Navigation
import { useNavigation, useRoute } from "@react-navigation/native";
import { propsStackHome } from "../../../routes/Client/Models";

type TicketProps = {
  name: string;
  value: number;
  ticketAvailable: boolean;
};

const EventDetailsScreen = () => {
  const navigation = useNavigation<propsStackHome>();
  const route = useRoute();
  const [ticketSimples, setTicketSimples] = React.useState(0);
  const [ticketCamarote, setTicketCamarote] = React.useState(0);

  const addRemove = (type: string, operation: string) => {
    if (type === "Simples") {
      if (operation === "Add") {
        setTicketSimples((oldState) => oldState + 1);
      } else {
        if (ticketSimples !== 0) {
          setTicketSimples((oldState) => oldState - 1);
        }
      }
    } else {
      if (operation === "Add") {
        setTicketCamarote((oldState) => oldState + 1);
      } else {
        if (ticketCamarote !== 0) {
          setTicketCamarote((oldState) => oldState - 1);
        }
      }
    }
  };

  return (
    <Screen>
      <S.Container>
        <S.Top source={ImageDetails} resizeMode="resize" />
        <S.Bottom>
          <Text bold size={STYLES.SIZES.medium} align="justify">
            {route?.params?.details.description}
          </Text>
          <View>
            {route?.params?.details.ticket.map((ticket: TicketProps) => {
              if (ticket.ticketAvailable) {
                return (
                  <S.ContainerSelect>
                    <Text
                      bold
                      size={STYLES.SIZES.medium}
                      style={{ width: "70%" }}
                    >
                      {ticket.name}: {formatCurrency(ticket.value)}
                    </Text>
                    <S.ContainerAddRemove>
                      <Ionicons
                        name={"add"}
                        size={STYLES.SIZES.extraLarge}
                        color={STYLES.COLORS.success}
                        onPress={() => {
                          addRemove(ticket.name, "Add");
                        }}
                      />
                      <Text bold size={STYLES.SIZES.medium}>
                        {ticket?.name === "Simples"
                          ? ticketSimples
                          : ticketCamarote}
                      </Text>
                      <Ionicons
                        name={"remove"}
                        size={STYLES.SIZES.extraLarge}
                        color={STYLES.COLORS.error}
                        onPress={() => {
                          addRemove(ticket.name, "Remove");
                        }}
                      />
                    </S.ContainerAddRemove>
                  </S.ContainerSelect>
                );
              }
            })}
          </View>

          <S.ContainerSelect>
            <Text bold size={STYLES.SIZES.medium} style={{ width: "90%" }}>
              Valor:{" "}
              {formatCurrency(
                (ticketSimples !== 0
                  ? ticketSimples *
                    route?.params?.details.ticket.find(
                      (it: TicketProps) => it.name === "Simples"
                    ).value
                  : 0) +
                  (ticketCamarote !== 0
                    ? ticketCamarote *
                      route?.params?.details.ticket.find(
                        (it: TicketProps) => it.name === "Camarote"
                      ).value
                    : 0)
              )}
            </Text>
            <Ionicons
              name={"cart"}
              size={STYLES.SIZES.large}
              color={STYLES.COLORS.black}
              onPress={() => {}}
            />
          </S.ContainerSelect>

          {/* <Button
                  label={event.region}
                  onPress={() => {
                    setRegion(event);
                    setModalVisible(false);
                  }}
                  style={{ width: "100%", marginTop: 20 }}
                /> */}
        </S.Bottom>
      </S.Container>
    </Screen>
  );
};

export default EventDetailsScreen;
