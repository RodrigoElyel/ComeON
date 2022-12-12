import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { TouchableOpacity, View } from "react-native";

// Screens
import Login from "../../screens/Auth/Login";

// Icons
import { MaterialIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
