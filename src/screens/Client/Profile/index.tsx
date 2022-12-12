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
import { propsStackHome } from "../../../routes/Client/Models";

// Services
import { formatPhone } from "../../../services/Utils/phone";
import { formatCurrency } from "../../../services/Utils/money";

// redux
import { useSelector, useDispatch } from "react-redux";
import { logOut, saveUser } from "../../../redux/actions/userAction";

type Purchase = {
  ticketSimples: number;
  ticketCamarote: number;
  value: number;
  name: string;
  local: string;
};

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

          {userData?.purchaseHistory?.map((purchase: Purchase) => {
            return (
              <S.ContainerInfo
                key={purchase.name}
                style={{ borderRadius: 15, height: 85 }}
              >
                <Text bold align="center">
                  {purchase.name}
                </Text>
                <Text align="center">{purchase.local}</Text>
                <Text align="center">{formatCurrency(purchase.value)}</Text>
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
