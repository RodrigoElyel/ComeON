import { NavigationContainer } from "@react-navigation/native";

// Screens
import StackClient from './Client'

export default function () {
    return (
      <NavigationContainer>
        <StackClient />
      </NavigationContainer>
    );
  }
  