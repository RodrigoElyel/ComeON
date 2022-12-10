import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { TouchableOpacity, View } from "react-native";

// Screens
import Home from "../../../screens/Client/Home";
import EventType from "../../../screens/Client/EventType";

// Styles
import STYLES from "../../../styles";

// Icons
import { MaterialIcons } from "@expo/vector-icons";

// Models
import { propsNavigationStackHome } from "../Models";

const Stack = createStackNavigator<propsNavigationStackHome>();

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={(props) => {
        let routeName = props.route.name;
        return {
          headerShown: true,
          headerTintColor: STYLES.COLORS.secondary,
          headerStyle: {
            backgroundColor: STYLES.COLORS.primary,
            elevation: 0,
            shadowOpacity: 0,
          },
          // headerTitleAlign: "left",
          headerTitleStyle: {
            fontFamily: STYLES.FONT_FAMILY.bold,
            fontSize: STYLES.SIZES.large,
          },
          headerLeft: () => (
            <View>
              {routeName === "Home" ? (
                <></>
              ) : (
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                  <MaterialIcons
                    name="keyboard-arrow-left"
                    size={40}
                    color={STYLES.COLORS.secondary}
                  />
                </TouchableOpacity>
              )}
            </View>
          ),
        };
      }}
    >
      <Stack.Screen name="Home" component={Home} options={{headerTitle: "ComeON"}}/>
      <Stack.Screen name="EventType" component={EventType} options={{headerTitle: "Eventos"}}/>
    </Stack.Navigator>
  );
}
