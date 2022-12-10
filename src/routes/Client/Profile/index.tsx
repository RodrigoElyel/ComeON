import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Profile from "../../../screens/Client/Profile"

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}