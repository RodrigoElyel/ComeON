import { View, TouchableOpacity, FlatList, Image, Alert } from "react-native";
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
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { propsStackHome } from "../../../routes/Client/Models";

type TicketProps = {
  name: string;
  value: number;
  ticketAvailable: boolean;
};

type EventDetails = {
  EventDetails: {
    details: {
      name: string;
      description: string;
      local: {
        name: string;
        maps: string;
      };
      eventType: string;
      ticket: {
        name: string;
        value: number | 0;
        ticketAvailable: boolean;
      }[];
    };
  };
};

const EventDetailsScreen = () => {
  const navigation = useNavigation<propsStackHome>();
  const route = useRoute<RouteProp<EventDetails, "EventDetails">>();
  const { details } = route?.params;
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

  const getResult = () => {
    var sum = 0;
    var valueTicketSimples = details?.ticket.find(
      (it: TicketProps) => it?.name === "Simples"
    )?.value;
    var valueTicketCamarote = details?.ticket.find(
      (it: TicketProps) => it?.name === "Camarote"
    )?.value;

    if (ticketSimples !== 0 && valueTicketSimples) {
      sum += ticketSimples * valueTicketSimples;
    }
    if (ticketCamarote !== 0 && valueTicketCamarote) {
      sum += ticketCamarote * valueTicketCamarote;
    }
    console.log(sum);
    return sum;
  };

  const submit = () => {
    Alert.alert(
      "Atenção",
      `Você deseja finalizar a compra:\n${
        ticketSimples !== 0 ? ticketSimples + "x Simples" : ""
      }\n${ticketCamarote !== 0 ? ticketCamarote + "x Camarote" : ""}\n`,
      [
        { text: "Sair", style: "destructive" },
        {
          text: "Realizar pagamento",
          onPress: () => {
            let data = {
              ticketSimples: ticketSimples,
              ticketCamarote: ticketCamarote,
              value: getResult(),
              name: details.name,
              local: details.local.name,
            };
            navigation.navigate("Checkout", { ticket: data });
          },
        },
      ]
    );
  };

  return (
    <Screen>
      <S.Container>
        <S.Top source={ImageDetails} resizeMode="resize" />
        <S.Bottom>
          <Text bold size={STYLES.SIZES.medium} align="justify">
            {details?.description}
          </Text>
          <View>
            {details?.ticket.map((ticket: TicketProps) => {
              if (ticket.ticketAvailable) {
                return (
                  <S.ContainerSelect key={ticket.name}>
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

          <S.ContainerCart onPress={() => submit()}>
            <Text bold size={STYLES.SIZES.medium} style={{ width: "90%" }}>
              Valor: {formatCurrency(getResult())}
            </Text>
            <Ionicons
              name={"cart"}
              size={STYLES.SIZES.large}
              color={STYLES.COLORS.black}
            />
          </S.ContainerCart>
        </S.Bottom>
      </S.Container>
    </Screen>
  );
};

export default EventDetailsScreen;
