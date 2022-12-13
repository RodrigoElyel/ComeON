import { StatusBar } from "react-native";
import React from "react";

import { showMessage } from "react-native-flash-message";

export const AlertFlashMessage = (type = "info", description) => {
  const message = (type) => {
    if (type === "success") return "Success";
    if (type === "danger") return "Error";
    if (type === "info") return "Warning";
    if (type === "warning") return "Warning";

    return "Atenção";
  };
  showMessage({
    message: message(type),
    description: description,
    type: type,
    statusBarHeight: StatusBar.currentHeight,
    floating: true,
  });
};
