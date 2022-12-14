import { View, Alert, FlatList } from "react-native";
import React from "react";

// Components
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import InputMask from "../../../components/InputMask";
import Screen from "../../../components/Screen";
import Modal from "../../../components/Modal";
import EventDetailsAdmin from "../../../components/Cards/EventDetailsAdmin";

//Icons
import { Ionicons } from "@expo/vector-icons";

// Styled-Component
import * as S from "./styles";

// Styles
import STYLES from "../../../styles";

// Services
import { AlertFlashMessage } from "../../../services/AlertFlashMessage";

// Navigation
import { useNavigation } from "@react-navigation/native";
import { propsStackHome } from "../../../routes/Admin/Models";

// redux
import { useSelector, useDispatch } from "react-redux";
import { addEvent } from "../../../redux/actions/userAction";

const RegisterScreen = () => {
  const navigation = useNavigation<propsStackHome>();
  const dispatch = useDispatch();
  const userData = useSelector((store: any) => store.user);
  const [name, setName] = React.useState("");
  const [ticketSimples, setTicketSimples] = React.useState("");
  const [ticketCamarote, setTicketCamarote] = React.useState("");
  const [region, setRegion] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const submit = () => {
    if (
      !name.length ||
      !ticketSimples.length ||
      !ticketCamarote.length ||
      !region.length
    ) {
      AlertFlashMessage("danger", "Preencha todos os dados");
      setLoading(false);
      return;
    }

    let data = {
      id: userData.registeredEvents.length + 1,
      name: name,
      description:
        "Drinks, chopps, comidinhas, shots, open bar na final, ainda vai contar com uma edição simultânea na Europa em Lisboa e edições especiais CARNAVALZINHO, com outras assinadas pelos times do CAMAROTE ALLEGRIA e ISSO NÃO É UMA FESTA. ",
      local: {
        region: region,
        name: "Luís Correia - PI",
        maps: "https://goo.gl/maps/KJb7nFcatZkcr7zp6",
      },
      eventType: "reveillon",
      ticket: [
        {
          name: "Simples",
          value: parseFloat(ticketSimples.replace(/\D/g, "")) / 100,
          ticketAvailable: true,
        },
        {
          name: "Camarote",
          value: parseFloat(ticketCamarote.replace(/\D/g, "")) / 100,
          ticketAvailable: true,
        },
      ],
    };


    setTimeout(() => {
      setLoading(false);
      dispatch(addEvent(data));
      AlertFlashMessage("success", "Evento criado!");
      navigation.goBack();
    }, 2000);
  };

  const Regions = [
    {
      region: "Piauí",
    },
    {
      region: "Ceará",
    },
    {
      region: "Maranhão",
    },
  ];

  return (
    <Screen>
      <S.Container>
        <S.Top>
          <Input
            keyboardType="default"
            placeholder="Nome do evento"
            value={name}
            style={{ width: "100%", marginTop: 24 }}
            onChangeText={(value: string) => {
              setName(value?.toUpperCase());
            }}
          />
          <InputMask
            typeMask={"money"}
            optionsMask={{
              precision: 2,
              separator: ",",
              delimiter: ".",
              unit: "R$ ",
            }}
            placeholder="Valor ingresso Simples"
            keyboardType="numeric"
            value={ticketSimples}
            style={{ marginTop: 5, width: "100%" }}
            onChangeText={(value: string) => {
              setTicketSimples(value);
            }}
          />
          <InputMask
            typeMask={"money"}
            optionsMask={{
              precision: 2,
              separator: ",",
              delimiter: ".",
              unit: "R$ ",
            }}
            placeholder="Valor ingresso Camarote"
            keyboardType="numeric"
            value={ticketCamarote}
            style={{ marginTop: 5, width: "100%" }}
            onChangeText={(value: string) => {
              setTicketCamarote(value);
            }}
          />
          <S.ContainerInfo onPress={() => setModalVisible(true)}>
            <Text
              color={
                region.length ? STYLES.COLORS.black : STYLES.COLORS.middleGray
              }
            >
              {region.length ? region : "Região"}
            </Text>
          </S.ContainerInfo>
        </S.Top>
        <S.Bottom>
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

        {/* MODAL */}
        <Modal visible={modalVisible}>
          <S.Top
            style={{
              flexDirection: "row",
              height: "10%",
              justifyContent: "space-between",
            }}
          >
            <Text bold size={STYLES.SIZES.large}>
              Selecione uma região
            </Text>
            <Ionicons
              name={"close"}
              size={STYLES.SIZES.extraLarge}
              color={STYLES.COLORS.black}
              onPress={() => {
                setModalVisible(false);
              }}
            />
          </S.Top>
          <S.Bottom style={{ height: "90%", justifyContent: "flex-start" }}>
            {Regions?.map((event) => {
              return (
                <Button
                  key={event.region}
                  label={event.region}
                  onPress={() => {
                    setRegion(event.region);
                    setModalVisible(false);
                  }}
                  style={{ width: "100%", marginTop: 20 }}
                />
              );
            })}
          </S.Bottom>
        </Modal>
      </S.Container>
    </Screen>
  );
};

export default RegisterScreen;
