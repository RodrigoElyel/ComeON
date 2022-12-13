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
import { propsStackHome } from "../../../routes/Admin/Models";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  removeEvent,
  user as userProps,
} from "../../../redux/actions/userAction";

type ticket = {
  name: string;
  value: number;
  ticketAvailable: boolean;
};

type event = {
  id: number;
  name: string;
  description: string;
  local: {
    region: string;
    name: string;
    maps: string;
  };
  eventType: string;
  ticket: {
    name: string;
    value: number;
    ticketAvailable: boolean;
  }[];
};

const HomeScreen = () => {
  const navigation = useNavigation<propsStackHome>();
  const dispatch = useDispatch();
  const userData = useSelector((store: any) => store.user);
  const [search, setSearch] = React.useState("");
  // const [userData, setUserData] = React.useState<userProps>();
  // console.log(JSON.stringify(userData, null, 2));

  const filterSearch =
    search !== ""
      ? userData?.registeredEvents.filter(
          (item: event) =>
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
            style={{ width: "95%", marginTop: 24 }}
            onChangeText={(value: string) => {
              setSearch(value?.toUpperCase());
            }}
          />
        </S.Top>
        <S.Bottom>
          <FlatList
            data={filterSearch}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <EventDetailsAdmin
                label={item.name}
                ticketSimples={
                  item.ticket.find((it: ticket) => it.name === "Simples").value
                }
                ticketCamarote={
                  item.ticket.find((it: ticket) => it.name === "Camarote").value
                }
                region={item.local.region}
                onPressRemove={() => {
                  dispatch(removeEvent(item));
                }}
                onPressEdit={() => {
                  let getSimples = item.ticket.find(
                    (it: ticket) => it.name === "Simples"
                  ).value;
                  let getCamarote = item.ticket.find(
                    (it: ticket) => it.name === "Camarote"
                  ).value;
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
                style={{ margin: 10 }}
              />
            )}
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
