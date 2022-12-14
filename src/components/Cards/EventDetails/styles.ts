import styled from "styled-components/native";
import STYLES from "../../../styles";

export interface Props {}

export const ContainerCard = styled.TouchableOpacity`
  width: 330px;
  height: 130px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: ${STYLES.COLORS.white};
  padding: 16px;
  margin-top: 8px;
  border-radius: 15px;
`;

export const ContainerImage = styled.View`
  width: 40%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContainerText = styled.View`
  width: 55%;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const cardShadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.05,
  shadowRadius: 12,
  elevation: 10,
};
