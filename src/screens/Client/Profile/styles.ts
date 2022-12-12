import { ScrollView } from "react-native";
import styled from "styled-components/native";
import STYLES from "../../../styles";

export interface Props {}

export const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  /* justify-content: center; */
`;

export const Top = styled.View`
  width: 90%;
  height: 25%;
  justify-content: flex-end;
`;

export const Center = styled.ScrollView`
  width: 90%;
  height: 65%;
`;

export const Bottom = styled.View`
  width: 90%;
  height: 10%;
  justify-content: center;
`;

export const ContainerInfo = styled.TouchableOpacity`
  width: 100%;
  height: 100px;
  border-radius: 50px;
  padding: 8px;
  align-items: center;
  margin-top: 8px;
  justify-content: space-between;
  background-color: ${STYLES.COLORS.white};
`;
