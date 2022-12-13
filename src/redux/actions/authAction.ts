export const logIn = (type: string) => {
  return {
    type: "LOG_IN",
    auth: type
  };
};

export const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};
