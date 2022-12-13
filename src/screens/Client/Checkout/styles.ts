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
  width: 95%;
  height: 40%;
  margin-top: 8px;
`;

export const Bottom = styled.View`
  width: 95%;
  height: 60%;
  justify-content: space-around;
`;

export const ContainerAddRemove = styled.View`
  width: 30%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ContainerFront = styled.View`
  width: 100%;
  min-height: 180px;
  padding: 12px;
  border-radius: 15px;
  justify-content: space-around;
  background-color: ${STYLES.COLORS.secondary};
`;
