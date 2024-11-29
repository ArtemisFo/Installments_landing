import { Children, InputSizeType, LogoSizeType } from "./general.ts";
import React, { InputHTMLAttributes } from "react";

export interface LabelProps {
  children?: Children;
  className?: string;
  required?: boolean;
}
export interface HelperTextProps {
  children?: Children;
  className?: string;
}
export interface LogoProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  size?: LogoSizeType;
}
export interface PopoverProps {
  anchorEl: Element | null;
  anchorPos: "bottom-left" | "bottom-right";
  originPos: "top-right" | "top-left";
  children: Children;
  isOpen: boolean;
  onClose: (e: MouseEvent) => void;
  onCloseDeps?: React.DependencyList;
}
export interface JalaliDateType {
  year: number;
  month: number;
  day: number;
}

export interface DialogProps {
  children: Children;
  onClose?: () => void;
  isOpen?: boolean;
  bottom?: boolean;
}

export interface CFileType extends File {
  path?: string;
}

export interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  labelProps?: Omit<LabelProps, "children">;
  helperTextProps?: Omit<HelperTextProps, "children">;
  label?: string;
  requiredLabel?: boolean;
  helperText?: string;
  size?: InputSizeType;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
}

export interface RadioBtnProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
}
export interface LogoProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  size?: LogoSizeType;
}
