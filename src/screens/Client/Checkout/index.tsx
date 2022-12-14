import {
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React from "react";

// Components
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import InputMask from "../../../components/InputMask";
import Screen from "../../../components/Screen";

// Iamge
import Success from "../../../assets/ticket.png";

//Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

// Services
import { AlertFlashMessage } from "../../../services/AlertFlashMessage";

// Styled-Component
import * as S from "./styles";

// Styles
import STYLES from "../../../styles";

// redux
import { useSelector, useDispatch } from "react-redux";
import { purchaseTicket } from "../../../redux/actions/userAction";

// Navigation
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import {
  propsStackHome,
  TicketPurchasedProps,
} from "../../../routes/Client/Models";

import FlipCard from "react-native-flip-card";

type Checkout = {
  Checkout: {
    ticket: TicketPurchasedProps;
  };
};

const CheckoutScreen = () => {
  const navigation = useNavigation<propsStackHome>();
  const route = useRoute<RouteProp<Checkout, "Checkout">>();
  const dispatch = useDispatch();
  const userData = useSelector((store: any) => store.user);
  const { ticket } = route?.params;
  const [loading, setLoading] = React.useState(false);
  const [paymentSuccess, setPaymentSuccess] = React.useState(false);
  const [cardNumber, setCardNumber] = React.useState("");
  const [expire, setExpire] = React.useState("");
  const [name, setName] = React.useState("");
  const [cvv, setCvv] = React.useState("");

  const submit = () => {
    if (!cardNumber.length || !expire.length || !name.length || !cvv.length) {
      AlertFlashMessage("danger", "Preencha todos os dados");
      setLoading(false);
      return;
    }

    setTimeout(() => {
      setLoading(false);
      setPaymentSuccess(true);
      dispatch(purchaseTicket(ticket));
    }, 2000);
  };

  return (
    <Screen>
      {paymentSuccess ? (
        <S.Container style={{ alignSelf: "center", justifyContent: "center" }}>
          <Animatable.Image
            style={{ width: "60%" }}
            source={Success}
            resizeMode="contain"
            animation="pulse"
            delay={100}
            iterationCount="infinite"
          />

          <Button
            label={"Concluir"}
            onPress={() => {
              navigation.pop(3);
            }}
            style={{ width: "90%", marginTop: 20 }}
          />
        </S.Container>
      ) : (
        <S.Container>
          <S.Top>
            <S.ContainerFront>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="integrated-circuit-chip"
                  size={40}
                  color={STYLES.COLORS.white}
                />
                <Text
                  size={20}
                  color={STYLES.COLORS.white}
                  style={{ textAlign: "right", marginRight: 20 }}
                >
                  {`CVV: ${!cvv.length ? "•••" : cvv}`}
                </Text>
              </View>
              <Text
                size={25}
                color={STYLES.COLORS.white}
                style={{ alignSelf: "center" }}
              >
                {!cardNumber.length ? "•••• •••• •••• ••••" : cardNumber}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text size={14} color={STYLES.COLORS.white}>
                  {!name.length ? "NOME DO TITULAR" : name}
                </Text>
                <Text
                  size={14}
                  color={STYLES.COLORS.white}
                  style={{ textAlign: "center" }}
                >
                  {`Validade\n ${!expire.length ? "••/••" : expire}`}
                </Text>
              </View>
            </S.ContainerFront>
          </S.Top>
          <S.Bottom>
            <Pressable>
              <InputMask
                typeMask={"custom"}
                optionsMask={{
                  mask: "9999 9999 9999 9999",
                }}
                placeholder="Insira o número do cartão"
                keyboardType="numeric"
                value={cardNumber}
                style={{ marginTop: 8, width: "100%" }}
                onChangeText={(value: string) => {
                  setCardNumber(value);
                }}
              />
              <Input
                keyboardType="default"
                placeholder="Insira o nome do titular"
                value={name}
                style={{ width: "100%" }}
                onChangeText={(value: string) => {
                  setName(value?.toUpperCase());
                }}
              />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <InputMask
                  typeMask={"custom"}
                  optionsMask={{
                    mask: "99/99",
                  }}
                  placeholder="MM/AA"
                  keyboardType="numeric"
                  value={expire}
                  style={{ width: "49%" }}
                  onChangeText={(value: string) => {
                    setExpire(value);
                  }}
                />

                <InputMask
                  typeMask={"custom"}
                  optionsMask={{
                    mask: "999",
                  }}
                  placeholder="CVC/CVV"
                  value={cvv}
                  keyboardType="numeric"
                  style={{ width: "49%" }}
                  onChangeText={(value: string) => {
                    setCvv(value);
                  }}
                />
              </View>
            </Pressable>

            <Button
              label={"Cadastrar"}
              loading={loading}
              onPress={() => {
                setLoading(true);
                submit();
              }}
              style={{ width: "100%" }}
            />
          </S.Bottom>
        </S.Container>
      )}
    </Screen>
  );
};

export default CheckoutScreen;
