import { ticket, event, user } from "../actions/userAction";

const initialState = {
  purchaseHistory: [],
  registeredEvents: [],
};

type ActionProps = {
  type: string;
  user: any;
};

export default (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case "SAVE_USER":
      return {
        ...state,
        ...action.user,
      };
    case "PURCHASE_TICKET":
      let newArrayTicket: ticket[] = state.purchaseHistory;
      newArrayTicket.push(action?.user);
      return {
        ...state,
        purchaseHistory: newArrayTicket,
      };
    case "ADD_EVENT":
      let newArrayEvent: event[] = state.registeredEvents;
      newArrayEvent.push(action?.user);
      return {
        ...state,
        registeredEvents: newArrayEvent,
      };
    case "REMOVE_EVENT":
      return {
        ...state,
        registeredEvents: state.registeredEvents.filter(
          (event: event) => event.id !== action.user.id
        ),
      };
    case "EDIT_EVENT":
      return {
        ...state,
        registeredEvents: [
          ...state.registeredEvents.filter(
            (event: event) => event.id !== action.user.id
          ),
          action.user,
        ],
      };
    default:
      return state;
  }
};
