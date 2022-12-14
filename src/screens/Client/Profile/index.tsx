import { View, TouchableOpacity, Image } from "react-native";
import React from "react";

// Components
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Screen from "../../../components/Screen";
import EventType from "../../../components/Cards/EventType";

// Styled-Component
import * as S from "./styles";

// Styles
import STYLES from "../../../styles";

// Image
import Person from "../../../assets/person.png";

// Navigation
import { useNavigation } from "@react-navigation/native";
import {
  propsStackHome,
  TicketPurchasedProps,
} from "../../../routes/Client/Models";

// Services
import { formatPhone } from "../../../services/Utils/phone";
import { formatCurrency } from "../../../services/Utils/money";

// redux
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../../redux/actions/authAction";

const ProfileScreen = () => {
  const navigation = useNavigation<propsStackHome>();
  const dispatch = useDispatch();
  const userData = useSelector((store: any) => store.user);

  return (
    <Screen>
      <S.Container>
        <S.Top>
          <S.ContainerInfo>
            <Image
              source={Person}
              resizeMode="contain"
              style={{ height: 100, width: 100, marginTop: -55 }}
            />
            <Text bold align="center">
              {userData.name}
            </Text>
            <Text bold align="center">
              {formatPhone(userData.phone)}
            </Text>
          </S.ContainerInfo>
        </S.Top>
        <S.Center>
          <Text bold align="center" style={{ marginTop: 30 }}>
            Histórico de compras
          </Text>

          {userData?.purchaseHistory?.map((ticket: TicketPurchasedProps) => {
            return (
              <S.ContainerInfo
                key={ticket.name}
                style={{ borderRadius: 15, height: 85 }}
              >
                <Text bold align="center">
                  {ticket.name}
                </Text>
                <Text align="center">{ticket.local}</Text>
                <Text align="center">{formatCurrency(ticket.value)}</Text>
              </S.ContainerInfo>
            );
          })}
        </S.Center>
        <S.Bottom>
          <Button
            label={"Sair"}
            onPress={() => {
              dispatch(logOut());
            }}
            style={{ width: "100%" }}
          />
        </S.Bottom>
      </S.Container>
    </Screen>
  );
};

export default ProfileScreen;
