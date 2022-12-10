import { View, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";

// Styled-Component
import * as S from "./styles";

// Styles
import STYLES from "../../../styles";

// Components
import Text from "../../Text";

type Props = {
  image: React.ReactNode;
  label: string;
  style?: React.CSSProperties;
  onPress: (() => void) | undefined;
};

const EventType = ({ image, label, onPress, style }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <S.ContainerImage source={image} style={style}>
        <Text bold size={STYLES.SIZES.large} color={STYLES.COLORS.white}>
          {label}
        </Text>
      </S.ContainerImage>
    </TouchableOpacity>
  );
};

export default EventType;
