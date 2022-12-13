const initialState = {
  logged: false,
  type: "",
};

type ActionProps = {
  type: string;
  auth: string;
};

export default (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        logged: true,
        type: action.auth,
      };
    case "LOG_OUT":
      return {
        ...state,
        logged: false,
        type: "",
      };
    default:
      return state;
  }
};
