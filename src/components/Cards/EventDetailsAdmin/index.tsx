import { View, ImageBackground, Image } from "react-native";
import React from "react";

// Styled-Component
import * as S from "./styles";

//Icons
import { Ionicons } from "@expo/vector-icons";

// Styles
import STYLES from "../../../styles";

// Image
import PartyImage from "../../../assets/imageParty01.png";

// Components
import Text from "../../Text";

type Props = {
  label: string;
  ticketSimples: string;
  ticketCamarote: string;
  region: string;
  style?: React.CSSProperties;
  onPressRemove: (() => void) | undefined;
  onPressEdit: (() => void) | undefined;
};

const EventDetailsAdmin = ({
  label,
  ticketSimples,
  ticketCamarote,
  region,
  onPressRemove,
  onPressEdit,
  style,
}: Props) => {
  return (
    <S.ContainerCard style={style}>
      <S.ContainerImage>
        <Image
          style={{ width: "100%", height: "70%", borderRadius: 8 }}
          source={PartyImage}
          resizeMode="cover"
        />
        <Text
          bold
          size={STYLES.SIZES.medium}
          color={STYLES.COLORS.black}
          align="center"
        >
          {region}
        </Text>
      </S.ContainerImage>
      <S.ContainerText>
        <Text bold size={STYLES.SIZES.medium} color={STYLES.COLORS.black}>
          {label}
        </Text>
       
        <Text bold size={STYLES.SIZES.smallMedium} color={STYLES.COLORS.black}>
          Simples: {ticketSimples}
        </Text>
        <Text bold size={STYLES.SIZES.smallMedium} color={STYLES.COLORS.black}>
          Camarote: {ticketSimples}
        </Text>
      </S.ContainerText>
      <S.ContainerIcons>
        <Ionicons
          name={"trash"}
          size={STYLES.SIZES.large}
          color={STYLES.COLORS.black}
          onPress={onPressRemove}
        />
        <Ionicons
          name={"pencil"}
          size={STYLES.SIZES.large}
          color={STYLES.COLORS.black}
          onPress={onPressEdit}
        />
      </S.ContainerIcons>
    </S.ContainerCard>
  );
};

export default EventDetailsAdmin;
