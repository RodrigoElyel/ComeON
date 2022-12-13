export type user = {
  name: string;
  phone: string;
  type: string;
  registeredEvents?: event[];
  purchaseHistory?: ticket[];
};

export type ticket = {
  ticketSimples: number;
  ticketCamarote: number;
  value: number;
  local: string;
  name: string;
};

export type event = {
  id: number;
  name: string;
  description: string;
  local: {
    region: string;
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

export const saveUser = (user: user) => {
  return {
    type: "SAVE_USER",
    user: user,
  };
};

export const purchaseTicket = (ticket: ticket) => {
  return {
    type: "PURCHASE_TICKET",
    user: ticket,
  };
};

export const removeEvent = (event: event) => {
  return {
    type: "REMOVE_EVENT",
    user: event,
  };
};
export const addEvent = (event: event) => {
  return {
    type: "ADD_EVENT",
    user: event,
  };
};

export const editEvent = (event: event) => {
  return {
    type: "EDIT_EVENT",
    user: event,
  };
};
