import styled from "styled-components";
import { ButtonProps, ContentProps } from "./types";

export const Button = styled.button<ButtonProps>`
  font-size: ${(props) => props.labelFontSize};
  font-family: ${(props) => props.labelFontFamily};
  width: ${(props) => props.width}px;
  border-color: ${(props) => props.borderColor};
  background-color: ${(props) => props.bgColor};
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};
  color: ${(props) =>
    props.selected ? props.highlightedLabelColor : props.labelColor};
`;

export const Content = styled.div<ContentProps>`
  font-size: ${(props) => props.contentFontSize};
  font-family: ${(props) => props.contentFontFamily};
  color: ${(props) => props.contentColor};
`;
