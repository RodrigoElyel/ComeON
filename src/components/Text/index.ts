import styled from "styled-components/native";
import STYLES from "../../styles";

export interface TextProps {
  bold?: boolean;
  size?: number;
  align?: string;
  italic?: boolean;
  color?: string;
  transform?: string;
  decoration?: string;
  font?: string;
  decorationColor?: string;
}

const Text = styled.Text`
  font-family: ${({ font, bold }: TextProps) =>
    bold ? STYLES.FONT_FAMILY.bold : font ? font : STYLES.FONT_FAMILY.regular};
  font-size: ${({ size }: TextProps) => (size ? size : STYLES.SIZES.medium)}px;
  text-align: ${({ align }: TextProps) => align || "left"};
  font-style: ${({ italic }: TextProps) => (italic ? "italic" : "normal")};
  color: ${({ color }: TextProps) => color || STYLES.COLORS.black};
  text-transform: ${({ transform }: TextProps) =>
    transform ? transform : "none"};
  text-decoration: ${({ decoration }: TextProps) =>
    decoration ? decoration : "none"};
  text-decoration-color: ${({ decorationColor }: TextProps) =>
    decorationColor || STYLES.COLORS.black};
`;

export default Text;
