import { StackNavigationProp } from "@react-navigation/stack";

export type propsNavigationStackHome = {
  Home: undefined;
  EventType: {
    event: {
      name: string;
      eventType: string;
      image: React.ReactNode;
    };
  };
};

export type propsStackHome = StackNavigationProp<propsNavigationStackHome>;
