import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Profile from "../../../screens/Client/Profile";

// Styles
import STYLES from "../../../styles";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
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
      }}
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerTitle: "Perfil" }}
      />
    </Stack.Navigator>
  );
}
