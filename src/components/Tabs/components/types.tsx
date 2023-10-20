import { JSXElementConstructor, ReactElement } from "react";

export type ButtonProps = {
  children: HTMLElement[];
  bgColor?: string;
  borderColor?: string;
  width?: number;
  contentColor?: string;
  highlightedLabelColor?: string;
  labelColor?: string;
  labelFontSize?: number;
  contentFontSize?: number;
  labelFontFamily?: string;
  contentFontFamily?: string;
  selected?: boolean;
};

export type ContentProps = {
  contentFontSize?: number;
  contentFontFamily?: string;
  contentColor?: string;
};

export type TabsProps = {
  children:
    | ReactElement<unknown, string | JSXElementConstructor<unknown>>
    | readonly ReactElement<unknown, string | JSXElementConstructor<unknown>>[];
  bgColor?: string;
  borderColor?: string;
  width?: number;
  contentColor?: string;
  highlightedLabelColor?: string;
  labelColor?: string;
  labelFontSize?: number;
  contentFontSize?: number;
  labelFontFamily?: string;
  contentFontFamily?: string;
};
