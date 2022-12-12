import { View, Pressable, TextInput } from "react-native";
import React from "react";

// Styled-Component
import * as S from "./styles";

// Styles
import STYLES from "../../styles";

// Components
import Text from "../Text";
import { TextInputMaskOptionProp } from "react-native-masked-text";

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
  typeMask: string;
  optionsMask: TextInputMaskOptionProp;
};

const InputMask = ({
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
  typeMask,
  optionsMask,
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
          type={typeMask ? typeMask : "custom"}
          options={optionsMask ? optionsMask : null}
          autoComplete="off"
          autoCorrect={false}
          disabled={disabled}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={STYLES.COLORS.middleGray}
          keyboardType={keyboardType}
          editable={!disabled}
          style={{ width: icon ? "85%" : "100%" }}
          onChangeText={onChangeText}
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

export default InputMask;
