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
  EventDetails: {
    details: {
      name: string;
      description: string;
      local: {
        name: string;
        maps: string;
      };
      eventType: string;
      ticket: {
        name: string;
        value: number;
        ticketAvailable: boolean;
      }[];
    };
  };
  Checkout: {
    ticket: {
      ticketSimples: number;
      ticketCamarote: number;
      value: number;
      local: string;
      name: string;
    };
  };
};

export type propsStackHome = StackNavigationProp<propsNavigationStackHome>;
