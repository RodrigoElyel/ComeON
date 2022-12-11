import { View, Modal } from "react-native";
import React from "react";

// Styles
import THEME from "../../styles";

type Props = {
  children: React.ReactNode;
  transparent?: boolean;
  visible?: boolean;
};

const MyModal = ({ children, transparent = true, visible }: Props) => {
  return (
    <Modal animationType={"slide"} transparent={transparent} visible={visible}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: THEME.COLORS.white,
            alignItems: "center",
            paddingTop: 54,
          }}
        >
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default MyModal;
