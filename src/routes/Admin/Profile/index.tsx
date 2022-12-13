import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, View } from "react-native";

// Screens
import Profile from "../../../screens/Admin/Profile";
import Register from "../../../screens/Admin/Register";

// Styles
import STYLES from "../../../styles";

// Icons
import { MaterialIcons } from "@expo/vector-icons";

// Models
import { propsNavigationStackProfile } from "../Models";

const Stack = createStackNavigator<propsNavigationStackProfile>();

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
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
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontFamily: STYLES.FONT_FAMILY.bold,
            fontSize: STYLES.SIZES.large,
          },
          headerLeft: () => (
            <View>
              {routeName === "Profile" ? (
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
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerTitle: "Perfil" }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerTitle: "Novo Evento" }}
      />
    </Stack.Navigator>
  );
}
