import styled from "styled-components/native";
import STYLES from "../../styles";

export interface InputProps {
  disabled?: boolean;
  loading?: boolean;
  validable?: boolean;
  isValid?: boolean;
}

export const Container = styled.View`
  flex-direction: column;
  width: 300px;
  height: 75px;
`;

export const ContainerInput = styled.View`
  width: 100%;
  height: 50px;
  padding: 0px 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 2px ${STYLES.COLORS.lightGray};
  border-radius: 8px;
  border-color: ${({ validable, isValid }: InputProps) =>
    validable
      ? isValid
        ? STYLES.COLORS.success
        : STYLES.COLORS.error
      : STYLES.COLORS.lightGray};
  background-color: ${({ disabled, loading }: InputProps) =>
    disabled ? STYLES.COLORS.lightGray : STYLES.COLORS.lighterGray};
`;

export const Input = styled.TextInput`
  height: 100%;
  font-size: ${STYLES.SIZES.medium}px;
  font-family: ${STYLES.FONT_FAMILY.regular};
`;
