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
  height: 90%;
`;

export const Bottom = styled.View`
  width: 90%;
  height: 10%;
  justify-content: center;
`;

export const ContainerInfo = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  padding: 0px 8px;
  border-radius: 8px;
  align-items: flex-start;
  justify-content: center;
  margin-top: 8px;
  background-color: ${STYLES.COLORS.lighterGray};
`;
