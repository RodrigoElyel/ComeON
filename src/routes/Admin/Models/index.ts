import { StackNavigationProp } from "@react-navigation/stack";

// ++++++++++++++++++++ TYPES ++++++++++++++++++++
export type TicketProps = {
  name: string;
  value: number;
  ticketAvailable: boolean;
};

export type ListEventProps = {
  id: number;
  name: string;
  description: string;
  local: {
    region: string;
    name: string;
    maps: string;
  };
  eventType: string;
  ticket: TicketProps[];
};

export type EditEventProps = {
  id: number;
  name: string;
  ticketSimples: number;
  ticketCamarote: number;
  region: string;
};

// +++++++++++++++++++++++++++++++++++++++++++++

export type propsNavigationStackHome = {
  Home: undefined;
  Edit: {
    event: EditEventProps;
  };
};
export type propsNavigationStackProfile = {
  Profile: undefined;
  Register: undefined;
};

export type propsStackHome = StackNavigationProp<propsNavigationStackHome>;
export type propsStackProfile =
  StackNavigationProp<propsNavigationStackProfile>;
