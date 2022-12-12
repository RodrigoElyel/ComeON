type ticket = {
  ticketSimples: number;
  ticketCamarote: number;
  value: number;
  local: string;
  name: string;
};

export const saveUser = (user: any) => {
  return {
    type: "SAVE_USER",
    user: user,
  };
};

export const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};
export const purchaseTicket = (ticket: ticket) => {
  return {
    type: "PURCHASE_TICKET",
    user: ticket,
  };
};
