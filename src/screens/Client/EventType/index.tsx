import { View, TouchableOpacity, FlatList, Alert } from "react-native";
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
import CopaDoMundo from "../../../assets/copaDoMundo.png";
import Reveillon from "../../../assets/reveillon.png";
import Festas from "../../../assets/festas.png";

// Navigation
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { propsStackHome } from "../../../routes/Client/Models";

type EventDetails = {
  region: string;
  list: {
    name: string;
    description: string;
    local: {
      name: string;
      maps: string;
    };
    eventType: string;
    ticket: {
      name: string;
      value: number;
      ticketAvailable: boolean;
    }[];
  }[];
};

type EventType = {
  EventType: {
    event: {
      name: string;
      eventType: string;
      image: React.ReactNode;
    };
  };
};

const EventTypeScreen = () => {
  const navigation = useNavigation<propsStackHome>();
  const route = useRoute<RouteProp<EventType, "EventType">>();
  const { event } = route.params;

  const [region, setRegion] = React.useState<EventDetails>();
  const [modalVisible, setModalVisible] = React.useState(false);

  const Events = [
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
        {
          name: "Happy Hour",
          description:
            "Drinks, chopps, comidinhas, shots, open bar na final, ainda vai contar com uma edição simultânea na Europa em Lisboa e edições especiais CARNAVALZINHO, com outras assinadas pelos times do CAMAROTE ALLEGRIA e ISSO NÃO É UMA FESTA. ",
          local: {
            name: "Coqueiro - PI",
            maps: "https://goo.gl/maps/d9whGJCZpxLax3AB8",
          },
          eventType: "reveillon",
          ticket: [
            {
              name: "Simples",
              value: 35,
              ticketAvailable: false,
            },
            {
              name: "Camarote",
              value: 85,
              ticketAvailable: false,
            },
          ],
        },
        {
          name: "FUN FEST COPA",
          description:
            "Drinks, chopps, comidinhas, shots, open bar na final, ainda vai contar com uma edição simultânea na Europa em Lisboa e edições especiais CARNAVALZINHO, com outras assinadas pelos times do CAMAROTE ALLEGRIA e ISSO NÃO É UMA FESTA. ",
          local: {
            name: "Teresina - PI",
            maps: "https://goo.gl/maps/uqZdRu7DrP6dzPXKA",
          },
          eventType: "copa",
          ticket: [
            {
              name: "Simples",
              value: 49.99,
              ticketAvailable: true,
            },
            {
              name: "Camarote",
              value: 79.99,
              ticketAvailable: true,
            },
          ],
        },
      ],
    },
    {
      region: "Ceará",
      list: [
        {
          name: "Party Copa",
          description:
            "Drinks, chopps, comidinhas, shots, open bar na final, ainda vai contar com uma edição simultânea na Europa em Lisboa e edições especiais CARNAVALZINHO, com outras assinadas pelos times do CAMAROTE ALLEGRIA e ISSO NÃO É UMA FESTA. ",
          local: {
            name: "Praia do Futuro - CE",
            maps: "https://goo.gl/maps/cFWykv2vB9ivT8m27",
          },
          eventType: "copa",
          ticket: [
            {
              name: "Simples",
              value: 50,
              ticketAvailable: true,
            },
            {
              name: "Camarote",
              value: 150,
              ticketAvailable: false,
            },
          ],
        },
        {
          name: "Acqua Beach",
          description:
            "Drinks, chopps, comidinhas, shots, open bar na final, ainda vai contar com uma edição simultânea na Europa em Lisboa e edições especiais CARNAVALZINHO, com outras assinadas pelos times do CAMAROTE ALLEGRIA e ISSO NÃO É UMA FESTA. ",
          local: {
            name: "Cumbuco - CE",
            maps: "https://goo.gl/maps/1FtzXYdvqiKHYg498",
          },
          eventType: "reveillon",
          ticket: [
            {
              name: "Simples",
              value: 40,
              ticketAvailable: true,
            },
            {
              name: "Camarote",
              value: 100,
              ticketAvailable: true,
            },
          ],
        },
        {
          name: "Caucaia Fest",
          description:
            "Drinks, chopps, comidinhas, shots, open bar na final, ainda vai contar com uma edição simultânea na Europa em Lisboa e edições especiais CARNAVALZINHO, com outras assinadas pelos times do CAMAROTE ALLEGRIA e ISSO NÃO É UMA FESTA. ",
          local: {
            name: "Caucaia - CE",
            maps: "https://goo.gl/maps/k2tT1XxRYLwidv1N8",
          },
          eventType: "copa",
          ticket: [
            {
              name: "Simples",
              value: 19.99,
              ticketAvailable: true,
            },
            {
              name: "Camarote",
              value: 59.99,
              ticketAvailable: true,
            },
          ],
        },
      ],
    },
    {
      region: "Maranhão",
      list: [],
    },
  ];

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: region?.region ? region?.region : "Região",
      headerRight: () => (
        <>
          {region && (
            <TouchableOpacity
              style={{
                marginRight: 8,
                height: "100%",
                justifyContent: "center",
              }}
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Text bold color={STYLES.COLORS.secondary}>
                Trocar
              </Text>
            </TouchableOpacity>
          )}
        </>
      ),
    });
  }, [navigation, region, modalVisible]);

  React.useEffect(() => {
    const listener = navigation.addListener("focus", () => {});

    return listener;
  }, [navigation]);
  return (
    <Screen>
      <S.Container>
        <S.Top>
          <Text bold size={STYLES.SIZES.large}>
            {event.name}
          </Text>
        </S.Top>
        <S.Bottom>
          {!region && (
            <Button
              label={"Escolher uma região"}
              onPress={() => {
                setModalVisible(true);
              }}
              style={{ width: "100%" }}
            />
          )}
          <FlatList
            data={Events?.find(
              (it) => it.region === region?.region
            )?.list.filter(
              (type) => type.eventType === event.eventType
            )}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <EventDetails
                label={item.name}
                local={item.local.name}
                ticketAvailable={
                  item.ticket.find((it) => it.ticketAvailable === true)
                    ? true
                    : false
                }
                onPress={() => {
                  if (item.ticket.find((it) => it.ticketAvailable === true)) {
                    navigation.navigate("EventDetails", { details: item });
                  } else {
                    Alert.alert(
                      "Atenção",
                      "Festa não possui ingressos disponíveis para compra!"
                    );
                  }
                }}
                style={{ margin: 10 }}
              />
            )}
            ListEmptyComponent={
              <>
                {region && (
                  <Text bold size={STYLES.SIZES.medium} align="center">
                    Infelizmente não temos festas disponíveis para esse tipo de
                    evento
                  </Text>
                )}
              </>
            }
          />
        </S.Bottom>

        {/* MODAL */}
        <Modal visible={modalVisible}>
          <S.Top style={{ flexDirection: "row" }}>
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
          <S.Bottom>
            {Events?.map((event) => {
              return (
                <Button
                  key={event.region}
                  label={event.region}
                  onPress={() => {
                    setRegion(event);
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

export default EventTypeScreen;
