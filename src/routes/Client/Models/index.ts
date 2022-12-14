import { StackNavigationProp } from "@react-navigation/stack";

// ++++++++++++++++++++ TYPES ++++++++++++++++++++
export type TicketProps = {
  name: string;
  value: number;
  ticketAvailable: boolean;
};
export type TicketPurchasedProps = {
  ticketSimples: number;
  ticketCamarote: number;
  value: number;
  name: string;
  local: string;
};

export type ListEventProps = {
  name: string;
  description: string;
  local: {
    name: string;
    maps: string;
  };
  eventType: string;
  ticket: TicketProps[];
};

export type EventDetailsProps = {
  region: string;
  list: ListEventProps[];
};

export type EventTypeProps = {
  name: string;
  eventType: string;
  image: React.ReactNode;
};

// +++++++++++++++++++++++++++++++++++++++++++++

export type propsNavigationStackHome = {
  Home: undefined;
  EventType: {
    event: EventTypeProps;
  };
  EventDetails: {
    details: ListEventProps;
  };
  Checkout: {
    ticket: TicketPurchasedProps;
  };
};

export type propsStackHome = StackNavigationProp<propsNavigationStackHome>;
