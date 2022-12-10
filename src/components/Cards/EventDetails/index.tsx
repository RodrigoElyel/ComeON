import { View, ImageBackground, Image } from "react-native";
import React from "react";

// Styled-Component
import * as S from "./styles";

// Styles
import STYLES from "../../../styles";

// Image
import PartyImage from "../../../assets/imageParty01.png";

// Components
import Text from "../../Text";

type Props = {
  label: string;
  local: string;
  ticketValue: string;
  ticketAvailable: boolean;
  style?: React.CSSProperties;
  onPress: (() => void) | undefined;
};

const EventDetails = ({
  label,
  local,
  ticketValue,
  ticketAvailable,
  onPress,
  style,
}: Props) => {
  return (
    <S.ContainerCard style={style} onPress={onPress}>
      <Image
        style={[{ width: "40%", height: "100%", borderRadius: 8 }, S.cardShadow]}
        source={PartyImage}
        resizeMode="cover"
      />
      <S.ContainerText>
        <Text bold size={STYLES.SIZES.medium} color={STYLES.COLORS.black}>
          {label}
        </Text>
        <Text bold size={STYLES.SIZES.medium} color={STYLES.COLORS.black}>
          {local}
        </Text>
        <Text bold size={STYLES.SIZES.medium} color={STYLES.COLORS.black}>
          {ticketValue}
        </Text>
      </S.ContainerText>
    </S.ContainerCard>
  );
};

export default EventDetails;
