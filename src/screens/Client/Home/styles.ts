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
  height: 10%;
  justify-content: space-evenly;
  align-items: center;
`;

export const Bottom = styled.View`
  width: 90%;
  height: 90%;
`;
