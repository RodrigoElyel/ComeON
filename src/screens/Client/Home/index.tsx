import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { propsStackHome } from "../../../routes/Client/Models";

const Home = () => {
  const navigation = useNavigation<propsStackHome>();

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("EventType", { name: "a" })}
      >
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
