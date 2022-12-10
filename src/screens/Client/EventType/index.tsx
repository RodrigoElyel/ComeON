import { View, TouchableOpacity, FlatList } from "react-native";
import React from "react";

// Components
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Screen from "../../../components/Screen";
import EventDetails from "../../../components/Cards/EventDetails";

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
import { useNavigation, useRoute } from "@react-navigation/native";
import { propsStackHome } from "../../../routes/Client/Models";

const EventTypeScreen = () => {
  const navigation = useNavigation<propsStackHome>();
  const route = useRoute();

  const [region, setRegion] = React.useState("Piauí");

  const Events = [
    {
      region: "Piauí",
      list: [
        {
          name: "Pool Party",
          local: {
            name: "Luís Correia - PI",
            maps: "https://goo.gl/maps/KJb7nFcatZkcr7zp6",
          },
          eventType: "reveillon",
          ticketValue: 30,
          ticketAvailable: true,
        },
        {
          name: "Happy Hour",
          local: {
            name: "Coqueiro - PI",
            maps: "https://goo.gl/maps/d9whGJCZpxLax3AB8",
          },
          eventType: "reveillon",
          ticketValue: 59.99,
          ticketAvailable: false,
        },
        {
          name: "FUN FEST COPA",
          local: {
            name: "Teresina - PI",
            maps: "https://goo.gl/maps/uqZdRu7DrP6dzPXKA",
          },
          eventType: "copa",
          ticketValue: 25.5,
          ticketAvailable: true,
        },
      ],
    },
    {
      region: "Ceará",
      list: [
        {
          name: "Party Copa",
          local: {
            name: "Praia do Futuro - CE",
            maps: "https://goo.gl/maps/cFWykv2vB9ivT8m27",
          },
          eventType: "copa",
          ticketValue: 15,
          ticketAvailable: true,
        },
        {
          name: "Acqua Beach",
          local: {
            name: "Cumbuco - CE",
            maps: "https://goo.gl/maps/1FtzXYdvqiKHYg498",
          },
          eventType: "reveillon",
          ticketValue: 150.5,
          ticketAvailable: false,
        },
        {
          name: "Caucaia Fest",
          local: {
            name: "Caucaia - CE",
            maps: "https://goo.gl/maps/k2tT1XxRYLwidv1N8",
          },
          eventType: "copa",
          ticketValue: 35,
          ticketAvailable: true,
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
      headerTitle: region,
      headerRight: () => (
        <TouchableOpacity
          style={{
            marginRight: 8,
            height: "100%",
            justifyContent: "center",
          }}
          onPress={() => {}}
        >
          <Text bold color={STYLES.COLORS.secondary}>
            Trocar
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, region]);

  React.useEffect(() => {
    const listener = navigation.addListener("focus", () => {});

    return listener;
  }, [navigation]);
  return (
    <Screen>
      <S.Container>
        <S.Top>
          <Text bold size={STYLES.SIZES.large}>
            {route?.params?.event.name}
          </Text>
        </S.Top>
        <S.Bottom>
          <FlatList
            data={Events?.find((it) => it.region === region)?.list}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <EventDetails
                label={item.name}
                local={item.local.name}
                ticketValue={formatCurrency(item.ticketValue)}
                ticketAvailable={item.ticketAvailable}
                onPress={() => {
                  console.log("asd");
                }}
                style={{ margin: 10 }}
              />
            )}
          />
        </S.Bottom>
      </S.Container>
    </Screen>
  );
};

export default EventTypeScreen;
