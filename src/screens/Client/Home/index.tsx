import { View, TouchableOpacity, FlatList } from "react-native";
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
import CopaDoMundo from "../../../assets/copaDoMundo.png";
import Reveillon from "../../../assets/reveillon.png";
import Festas from "../../../assets/festas.png";

// Navigation
import { useNavigation } from "@react-navigation/native";
import { propsStackHome } from "../../../routes/Client/Models";

const Home = () => {
  const navigation = useNavigation<propsStackHome>();

  const EventTypes = [
    {
      name: "COPA DO MUNDO",
      eventType: "copa",
      image: CopaDoMundo,
    },
    {
      name: "REVEILLON",
      eventType: "reveillon",
      image: Reveillon,
    },
    {
      name: "FESTAS E BALADAS",
      eventType: "festas",
      image: Festas,
    },
  ];

  return (
    <Screen>
      <S.Container>
        <S.Top>
          <Text bold size={STYLES.SIZES.large}>
            Bem-vindo
          </Text>
          <Text bold align="center">
            Selecione o tipo de evento desejado
          </Text>
        </S.Top>
        <S.Bottom>
          <FlatList
            data={EventTypes}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <EventType
                label={item.name}
                image={item.image}
                onPress={() => {
                  navigation.navigate("EventType", { event: { ...item } });
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

export default Home;

{
  /* <Button label="Start" onPress={() => console.log("asd")} />
<Input
  value=""
  keyboardType="default"
  placeholder="asd"
  onChangeText={(e) => console.log(e)}
/> */
}
