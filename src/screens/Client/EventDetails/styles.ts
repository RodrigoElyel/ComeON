import styled from "styled-components/native";
import STYLES from "../../../styles";

export interface Props {}

export const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  /* justify-content: center; */
`;

export const Top = styled.Image`
  width: 100%;
  height: 30%;
`;

export const Bottom = styled.View`
  padding: 10px 0px;
  width: 90%;
  height: 70%;
  justify-content: space-around;
`;

export const ContainerSelect = styled.View`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  padding: 8px;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  background-color: ${STYLES.COLORS.white};
`;

export const ContainerCart = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  padding: 8px;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  background-color: ${STYLES.COLORS.white};
`;

export const ContainerAddRemove = styled.View`
  width: 30%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
