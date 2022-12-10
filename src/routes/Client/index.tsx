import React from "react";

// Stacks
import StackHome from "./Home";
import StackProfile from "./Profile";

//Icons
import { Ionicons } from "@expo/vector-icons";

// Style
import STYLE from "../../styles";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="StackHome"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "StackHome") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "StackProfile") {
            iconName = focused ? "md-person" : "ios-person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: STYLE.COLORS.primary,
        tabBarInactiveTintColor: STYLE.COLORS.black,
      })}
    >
      <Tab.Screen
        name="StackHome"
        component={StackHome}
        options={{ tabBarLabel: "Eventos", }}
      />
      <Tab.Screen
        name="StackProfile"
        component={StackProfile}
        options={{ tabBarLabel: "Perfil" }}
      />
    </Tab.Navigator>
  );
}
