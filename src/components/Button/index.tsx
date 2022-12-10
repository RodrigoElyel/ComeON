import { View, ActivityIndicator } from "react-native";
import React from "react";

// Styled-Component
import * as S from "./styles";

// Styles
import STYLES from "../../styles";

// Components
import Text from "../Text";

type Props = {
  label: string;
  style?: React.CSSProperties;
  labelColor?: string;
  loading?: boolean;
  disabled?: boolean;
  onPress: (() => void) | undefined;
};

const Button = ({
  style,
  disabled = false,
  loading = false,
  onPress,
  label,
  labelColor,
  ...rest
}: Props) => {
  return (
    <S.ContainerButton
      style={style}
      disabled={disabled || loading}
      onPress={onPress}
      loading={loading}
      {...rest}
    >
      <Text
        bold
        size={STYLES.SIZES.medium}
        color={labelColor ? labelColor : STYLES.COLORS.white}
      >
        {loading ? (
          <ActivityIndicator
            size={STYLES.SIZES.medium}
            color={STYLES.COLORS.white}
          />
        ) : (
          label
        )}
      </Text>
    </S.ContainerButton>
  );
};

export default Button;
