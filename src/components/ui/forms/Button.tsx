"use client";

import React, { ButtonHTMLAttributes, forwardRef, useMemo } from "react";
import {
  ButtonColorType,
  ButtonSizeType,
  ButtonVariantType,
  Children,
} from "@interfaces/general.ts";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: Children;
  size?: ButtonSizeType;
  variant?: ButtonVariantType;
  color?: ButtonColorType;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  fullWidth?: boolean;
  disabled?: boolean;
  isWide?: boolean;
}

const getSizeClasses = (size: ButtonSizeType) => {
  switch (size) {
    case "xs":
      return "typography-c3 min-h-8 font-bold min-w-14.5";
    case "sm":
      return "typography-c2 min-h-9 font-bold min-w-15";
    case "lg":
      return "typography-c1 min-h-11 font-bold min-w-15.5";
    case "xl":
      return "typography-c1 min-h-12 font-bold min-w-15.5";
    case "md":
    default:
      return "typography-c2 min-h-10 font-bold min-w-15";
  }
};

const getWideIconPos = (size: ButtonSizeType) => {
  switch (size) {
    case "xs":
      return "top-2";
    case "sm":
      return "top-2.5";
    case "lg":
      return "top-3.5";
    case "xl":
      return "top-4";
    case "md":
    default:
      return "top-3";
  }
};

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      size = "md",
      color = "primary",
      variant = "contained",
      fullWidth = false,
      disabled = false,
      isWide = false,
      startIcon,
      endIcon,
      className,
      ...prop
    },
    ref,
  ) => {
    const iconsSizeClass =
      size === "xs" || size === "sm" ? "[&>svg]:w-4" : "[&>svg]:w-5";

    const wideIconClasses = "absolute " + getWideIconPos(size);

    const ColorProps = useMemo(() => {
      if (disabled) return "btn-disabled";
      if (variant === "contained") {
        switch (color) {
          case "primary":
            return "btn-contained-primary";
          case "secondary":
            return "btn-contained-secondary";
          case "warning":
            return "btn-contained-warning";
          case "success":
            return "btn-contained-success";
          case "error":
            return "btn-contained-error";
          case "info":
            return "btn-contained-info";
          case "neutral":
            return "btn-contained-neutral";
          default:
            return "btn-contained-primary";
        }
      } else if (variant === "outlined") {
        switch (color) {
          case "primary":
            return "btn-outlined-primary";
          case "secondary":
            return "btn-outlined-secondary";
          case "warning":
            return "btn-outlined-warning";
          case "success":
            return "btn-outlined-success";
          case "error":
            return "btn-outlined-error";
          case "info":
            return "btn-outlined-info";
          case "neutral":
            return "btn-outlined-neutral";
          default:
            return "btn-outlined-primary";
        }
      } else if (variant === "text") {
        switch (color) {
          case "primary":
            return "btn-text-primary";
          case "secondary":
            return "btn-text-secondary";
          case "warning":
            return "btn-text-warning";
          case "success":
            return "btn-text-success";
          case "error":
            return "btn-text-error";
          case "info":
            return "btn-text-info";
          case "neutral":
            return "btn-text-neutral";
          default:
            return "btn-text-primary";
        }
      } else {
        switch (color) {
          case "primary":
            return "btn-halogen-primary";
          case "secondary":
            return "btn-halogen-secondary";
          case "warning":
            return "btn-halogen-warning";
          case "success":
            return "btn-halogen-success";
          case "error":
            return "btn-halogen-error";
          case "info":
            return "btn-halogen-info";
          case "neutral":
            return "btn-halogen-neutral";
          default:
            return "btn-halogen-primary";
        }
      }
    }, [color, variant, disabled]);

    return (
      <button
        className={`btn btn-medium relative ${ColorProps} ${getSizeClasses(size)}${className ? " " + className : ""}${fullWidth ? " " + "w-full" : ""}`}
        disabled={disabled}
        ref={ref}
        {...prop}
      >
        {startIcon && (
          <span
            className={
              "btn-startIcon " +
              iconsSizeClass +
              (isWide ? " " + "left-2" + " " + wideIconClasses : "")
            }
          >
            {startIcon}
          </span>
        )}
        {children}
        {endIcon && (
          <span
            className={
              "btn-endIcon " +
              iconsSizeClass +
              (isWide ? " " + "right-2" + " " + wideIconClasses : "")
            }
          >
            {endIcon}
          </span>
        )}
      </button>
    );
  },
);

export default Button;
