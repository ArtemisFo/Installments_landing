import React from "react";
import { SizeSvgType, SvgColorType, SvgProps } from "@interfaces/general.ts";

const SizeProp = (size: SizeSvgType) => {
  switch (size) {
    case "md":
      return "s-4";
    case "xs":
      return "s-2";
    case "sm":
      return "s-3";
    case "lg":
      return "s-5";
    case "xl":
      return "s-8";
    case "xxl":
      return "s-10";
    case "3l":
      return "s-12";
    default:
      return "s-4";
  }
};
const ViewBox = (viewBox: SizeSvgType) => {
  switch (viewBox) {
    case "md":
      return "0 0 16 16";
    case "xs":
      return "0 0 8 8";
    case "sm":
      return "0 0 12 12";
    case "lg":
      return "0 0 20 20";
    case "xl":
      return "0 0 24 24";
    case "xxl":
      return "0 0 32 32";
    case "3l":
      return "0 0 40 40";
    default:
      return "0 0 16 16";
  }
};

const getColorClass = (color: SvgColorType) => {
  switch (color) {
    case "secondary":
      return " icon-text-secondary-main";
    case "neutral":
      return " icon-text-neutral-main";
    case "info":
      return " icon-text-info-main";
    case "success":
      return " icon-text-success-main";
    case "warning":
      return " icon-text-warning-main";
    case "error":
      return " icon-text-error-main";
    case "primary":
    default:
      return " icon-text-primary-main";
  }
};

function Svg({
  children,
  size = "md",
  viewBox = "md",
  className,
  color,
  ...prop
}: SvgProps) {
  let sizes = SizeProp(size);
  let views = ViewBox(viewBox);
  const colorClass = color ? getColorClass(color) : "";

  return (
    <svg
      className={`s-svg-base ${sizes}${className ? " " + className : ""}${colorClass}`}
      viewBox={views}
      xmlns="http://www.w3.org/2000/svg"
      fill={"currentColor"}
      {...prop}
    >
      {children}
    </svg>
  );
}

export default Svg;
