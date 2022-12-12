const initialState = {
  logged: false,
  purchaseHistory: [],
  registeredEvents: []
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "SAVE_USER":
      return {
        ...state,
        ...action.user,
      };
    case "LOG_OUT":
      return {
        logged: false,
      };
    case "PURCHASE_TICKET":
      console.log({action})
      return {
        ...state,
        purchaseHistory: action.user,
      };
    default:
      return state;
  }
};
