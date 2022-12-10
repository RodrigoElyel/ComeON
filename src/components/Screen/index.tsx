import React from "react";
import {
  View,
  SafeAreaView,
  Pressable,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

// Styles
import STYLES from "../../styles";

// Styled-Component
import * as S from "./styles";

type Props = {
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const Screen = ({ children, style }: Props) => {
  return (
    <S.Container style={style}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Pressable onPressOut={Keyboard.dismiss}>
          <View>{children}</View>
        </Pressable>
      </KeyboardAvoidingView>
    </S.Container>
  );
};

export default Screen;
