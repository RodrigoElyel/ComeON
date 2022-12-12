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
import Logo from "../../../assets/logo.png";

// Navigation
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { propsStackHome } from "../../../routes/Client/Models";

// redux
import { useSelector, useDispatch } from "react-redux";
import { saveUser } from "../../../redux/actions/userAction";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const submit = (type: string) => {
    let additionalData =
      type === "client"
        ? {
            purchaseHistory: [
              {
                ticketSimples: 1,
                ticketCamarote: 1,
                value: 100,
                name: "Pool Party Especial Edition",
                local: "Luís Correia",
              },
            ],
          }
        : {
            registeredEvents: [
              {
                region: "Piauí",
                list: [
                  {
                    name: "Pool Party",
                    description:
                      "Drinks, chopps, comidinhas, shots, open bar na final, ainda vai contar com uma edição simultânea na Europa em Lisboa e edições especiais CARNAVALZINHO, com outras assinadas pelos times do CAMAROTE ALLEGRIA e ISSO NÃO É UMA FESTA. ",
                    local: {
                      name: "Luís Correia - PI",
                      maps: "https://goo.gl/maps/KJb7nFcatZkcr7zp6",
                    },
                    eventType: "reveillon",
                    ticket: [
                      {
                        name: "Simples",
                        value: 39.99,
                        ticketAvailable: false,
                      },
                      {
                        name: "Camarote",
                        value: 89.99,
                        ticketAvailable: true,
                      },
                    ],
                  },
                ],
              },
            ],
          };

    dispatch(
      saveUser({
        name: "Rodrigo Elyel",
        phone: "86995279594",
        type: type,
        logged: true,
        ...additionalData,
      })
    );
  };

  return (
    <Screen style={{ backgroundColor: STYLES.COLORS.primary }}>
      <S.Container>
        <S.Top source={Logo} resizeMode="contain" style={{ width: "50%" }} />
        <S.Bottom>
          <Text bold size={STYLES.SIZES.large} align="center">
            ComeON!
          </Text>
          <Button
            label={"Cliente"}
            onPress={() => {
              submit("client");
            }}
            style={{ width: "100%", marginTop: 10 }}
          />
          <Button
            label={"Admin"}
            onPress={() => {
              submit("admin");
            }}
            style={{ width: "100%", marginTop: 10 }}
          />
        </S.Bottom>
      </S.Container>
    </Screen>
  );
};

export default LoginScreen;
