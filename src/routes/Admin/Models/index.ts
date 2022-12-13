import { StackNavigationProp } from "@react-navigation/stack";

export type propsNavigationStackHome = {
  Home: undefined;
  Edit: {
    event: {
      id: number;
      name: string;
      ticketSimples: number;
      ticketCamarote: number;
      region: string;
    };
  };
};
export type propsNavigationStackProfile = {
  Profile: undefined;
  Register: undefined;
};

export type propsStackHome = StackNavigationProp<propsNavigationStackHome>;
export type propsStackProfile =
  StackNavigationProp<propsNavigationStackProfile>;
