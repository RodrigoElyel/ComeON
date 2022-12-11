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
  ticketAvailable: boolean;
  style?: React.CSSProperties;
  onPress: (() => void) | undefined;
};

const EventDetails = ({
  label,
  local,
  ticketAvailable,
  onPress,
  style,
}: Props) => {
  const getStatus = (status: boolean) => {
    if (status) {
      return {
        color: STYLES.COLORS.success,
        text: "Ingressos disponíveis",
      };
    } else {
      return {
        color: STYLES.COLORS.error,
        text: "Esgotado",
      };
    }
  };

  return (
    <S.ContainerCard style={style} onPress={onPress}>
      <S.ContainerImage>
        <Image
          style={{ width: "100%", height: "80%", borderRadius: 8 }}
          source={PartyImage}
          resizeMode="cover"
        />
        <Text
          bold
          size={STYLES.SIZES.smallMedium}
          align="center"
          color={getStatus(ticketAvailable).color}
        >
          {getStatus(ticketAvailable).text}
        </Text>
      </S.ContainerImage>
      <S.ContainerText>
        <Text bold size={STYLES.SIZES.medium} color={STYLES.COLORS.black}>
          {label}
        </Text>
        <Text bold size={STYLES.SIZES.medium} color={STYLES.COLORS.black}>
          {local}
        </Text>
      </S.ContainerText>
    </S.ContainerCard>
  );
};

export default EventDetails;
