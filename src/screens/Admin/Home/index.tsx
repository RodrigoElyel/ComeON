import { View, Alert, FlatList } from "react-native";
import React from "react";

// Components
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Screen from "../../../components/Screen";
import EventType from "../../../components/Cards/EventType";
import EventDetailsAdmin from "../../../components/Cards/EventDetailsAdmin";

// Styled-Component
import * as S from "./styles";

// Styles
import STYLES from "../../../styles";

//Icons
import { Ionicons } from "@expo/vector-icons";

// Image
import CopaDoMundo from "../../../assets/copaDoMundo.png";
import Reveillon from "../../../assets/reveillon.png";
import Festas from "../../../assets/festas.png";

// Navigation
import { useNavigation } from "@react-navigation/native";
import {
  propsStackHome,
  TicketProps,
  ListEventProps,
} from "../../../routes/Admin/Models";

// redux
import { useSelector, useDispatch } from "react-redux";
import { removeEvent } from "../../../redux/actions/userAction";
import { formatCurrency } from "../../../services/Utils/money";

const HomeScreen = () => {
  const navigation = useNavigation<propsStackHome>();
  const dispatch = useDispatch();
  const userData = useSelector((store: any) => store.user);
  const [search, setSearch] = React.useState("");

  const filterSearch =
    search !== ""
      ? userData?.registeredEvents.filter(
          (item: ListEventProps) =>
            item?.name.toLowerCase().includes(search?.toLowerCase()) ||
            item?.local.region.toLowerCase().includes(search?.toLowerCase())
        )
      : userData?.registeredEvents;

  return (
    <Screen>
      <S.Container>
        <S.Top>
          <Input
            keyboardType="default"
            placeholder="Buscar ..."
            value={search}
            icon={
              <Ionicons
                name={"search"}
                size={STYLES.SIZES.medium}
                color={STYLES.COLORS.black}
              />
            }
            style={{ width: "100%", marginTop: 24 }}
            onChangeText={(value: string) => {
              setSearch(value?.toUpperCase());
            }}
          />
        </S.Top>
        <S.Bottom>
          <FlatList
            data={filterSearch}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => {
              var getSimples = item.ticket.find(
                (it: TicketProps) => it.name === "Simples"
              ).value;
              var getCamarote = item.ticket.find(
                (it: TicketProps) => it.name === "Camarote"
              ).value;
              return (
                <EventDetailsAdmin
                  label={item.name}
                  ticketSimples={formatCurrency(getSimples)}
                  ticketCamarote={formatCurrency(getCamarote)}
                  region={item.local.region}
                  onPressRemove={() => {
                    dispatch(removeEvent(item));
                  }}
                  onPressEdit={() => {
                    navigation.navigate("Edit", {
                      event: {
                        id: item.id,
                        name: item.name,
                        ticketSimples: getSimples,
                        ticketCamarote: getCamarote,
                        region: item.local.region,
                      },
                    });
                  }}
                  style={{ width: "100%", marginTop: 10 }}
                />
              );
            }}
            ListEmptyComponent={() => (
              <Text bold size={STYLES.SIZES.medium} align="center">
                Você não possui nenhum evento cadastrado
              </Text>
            )}
          />
        </S.Bottom>
      </S.Container>
    </Screen>
  );
};

export default HomeScreen;
