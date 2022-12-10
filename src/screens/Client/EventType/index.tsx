import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const EventType = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity>
        <Text>EventType</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EventType;
