import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Profile = () => {
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
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
