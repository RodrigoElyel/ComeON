import { View, Pressable, TextInput } from "react-native";
import React from "react";

// Styled-Component
import * as S from "./styles";

// Styles
import STYLES from "../../styles";

// Components
import Text from "../Text";

type Props = {
  style?: React.CSSProperties;
  keyboardType: string;
  value: string;
  placeholder: string;
  onChangeText: ((text: string) => void) | undefined;
  handleIcon?: (() => void) | undefined;
  icon?: React.ReactNode;
  labelColor?: string;
  disabled?: boolean;
  validable?: boolean;
  isValid?: boolean;
  hasError?: boolean;
  errorMessage?: string;
};

const Button = ({
  style,
  keyboardType = "default",
  value = "",
  onChangeText,
  placeholder,
  icon,
  handleIcon,
  disabled,
  validable,
  isValid,
  hasError,
  errorMessage,
  ...rest
}: Props) => {
  return (
    <S.Container style={style}>
      <S.ContainerInput
        validable={validable}
        isValid={isValid}
        hasError={hasError}
      >
        <S.Input
          autoComplete="off"
          autoCorrect={false}
          disabled={disabled}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={STYLES.COLORS.middleGray}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          editable={!disabled}
          style={{ width: icon ? "85%" : "100%" }}
          {...rest}
        />
        {icon && (
          <Pressable
            onPress={handleIcon}
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "15%",
            }}
          >
            {icon}
          </Pressable>
        )}
      </S.ContainerInput>
      {validable && hasError && errorMessage && (
        <Text
          style={{ marginTop: 5, marginLeft: 15 }}
          size={STYLES.SIZES.smallMedium}
          color={STYLES.COLORS.error}
          bold
        >
          {errorMessage}
        </Text>
      )}
    </S.Container>
  );
};

export default Button;
