import { ReactNode } from "react";

export type Children = ReactNode;
export type InputSizeType = "md" | "lg" | "xl";
export type LogoSizeType = "xs" | "sm" | "md" | "lg" | "xl";
export type TypographyVariantType =
  | "b1"
  | "c1"
  | "c2"
  | "c3"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "s1"
  | "t1";
export type TypographySizeType = "bold" | "medium" | "regular";
import React, { ButtonHTMLAttributes, HTMLAttributes } from "react";

export type SizeSvgType = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "3l";
export type SvgColorType =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "neutral"
  | "warning";
export interface SvgProps extends ButtonHTMLAttributes<HTMLOrSVGElement> {
  children: React.ReactNode;
  size?: SizeSvgType;
  viewBox?: SizeSvgType;
  color?: SvgColorType;
}
export interface IconSvgProps extends HTMLAttributes<SVGElement> {
  size?: SizeSvgType;
  color?: SvgColorType;
}
export type ButtonVariantType =
  | "contained"
  | "outlined"
  | "text"
  | "halogen"
  | "disabled";

export type ButtonColorType =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "neutral"
  | "warning";
export type ButtonSizeType = "xs" | "sm" | "md" | "lg" | "xl";
export type MinimalTabColorType =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "neutral";
export type IconButtonVariantType =
  | "contained"
  | "outlined"
  | "text"
  | "text-on-container"
  | "halogen"
  | "disabled";
