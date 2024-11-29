"use client";

import {
  ButtonHTMLAttributes,
  cloneElement,
  forwardRef,
  ReactElement,
} from "react";
import {
  ButtonColorType,
  ButtonSizeType,
  IconButtonVariantType,
} from "@interfaces/general.ts";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSizeType;
  variant?: IconButtonVariantType;
  color?: ButtonColorType;
  fullRounded?: boolean;
  children: ReactElement;
}

const getSizeClasses = (size: ButtonSizeType) => {
  switch (size) {
    case "xs":
      return "w-6 h-6";
    case "sm":
      return "w-9 h-9";
    case "md":
      return "w-10 h-10";
    case "lg":
      return "w-11 h-11";
    case "xl":
      return "w-12 h-12";
    default:
      return "w-10 h-10";
  }
};

const getVariantAndColorClasses = (
  variant: IconButtonVariantType,
  color: ButtonColorType,
  disabled: boolean,
) => {
  let baseClass: string = "",
    colorClass: string;

  if (disabled) return "bg-neutral-container [&>svg]:text-ink-bh";

  switch (variant) {
    case "contained":
      baseClass = "[&>svg]:text-primary-onMain active:outline ";
      switch (color) {
        case "primary":
          colorClass = "bg-primary-main outline-primary-95 hover:bg-primary-30";
          break;
        case "secondary":
          colorClass =
            "bg-secondary-main outline-secondary-95 hover:bg-secondary-30";
          break;
        case "success":
          colorClass = "bg-success-main outline-success-95 hover:bg-success-30";
          break;
        case "error":
          colorClass = "bg-error-main outline-error-95 hover:bg-error-30";
          break;
        case "info":
          colorClass = "bg-info-main outline-info-95 hover:bg-info-30";
          break;
        case "warning":
          colorClass = "bg-warning-main outline-warning-95 hover:bg-warning-30";
          break;
        case "neutral":
          colorClass = "bg-neutral-main outline-neutral-95 hover:bg-neutral-30";
          break;
        default:
          colorClass = "bg-primary-main outline-primary-95 hover:bg-primary-30";
      }
      return baseClass + colorClass;
    case "outlined":
      baseClass = "border active:border-none active:outline ";
      switch (color) {
        case "primary":
          colorClass =
            "border-primary-main outline-primary-95 [&>svg]:text-primary-main hover:border-primary-30 [&>svg]:hover:text-primary-30";
          break;
        case "secondary":
          colorClass =
            "border-secondary-main outline-secondary-95 [&>svg]:text-secondary-main hover:border-secondary-30 [&>svg]:hover:text-secondary-30";
          break;
        case "success":
          colorClass =
            "border-success-main outline-success-95 [&>svg]:text-success-main hover:border-success-30 [&>svg]:hover:text-success-30";
          break;
        case "error":
          colorClass =
            "border-error-main outline-error-95 [&>svg]:text-error-main hover:border-error-30 [&>svg]:hover:text-error-30";
          break;
        case "info":
          colorClass =
            "border-info-main outline-info-95 [&>svg]:ui-text-info-main hover:ui-border-info-30 [&>svg]:hover:ui-text-info-30";
          break;
        case "warning":
          colorClass =
            "ui-border-warning-main ui-outline-warning-95 [&>svg]:ui-text-warning-main hover:ui-border-warning-30 [&>svg]:hover:ui-text-warning-30";
          break;
        case "neutral":
          colorClass =
            "ui-border-neutral-main ui-outline-neutral-95 [&>svg]:ui-text-neutral-main hover:ui-border-neutral-30 [&>svg]:hover:ui-text-neutral-30";
          break;
        default:
          colorClass =
            "ui-border-primary-main ui-outline-primary-95 [&>svg]:ui-text-primary-main hover:ui-border-primary-30 [&>svg]:hover:ui-text-primary-30";
      }
      return baseClass + colorClass;
    case "text":
      switch (color) {
        case "primary":
          colorClass =
            "hover:ui-bg-primary-main/10 active:ui-bg-primary-main/10 [&>svg]:ui-text-primary-main";
          break;
        case "secondary":
          colorClass =
            "hover:ui-bg-secondary-main/10 active:ui-bg-secondary-main/10 [&>svg]:ui-text-secondary-main";
          break;
        case "success":
          colorClass =
            "hover:ui-bg-success-main/10 active:ui-bg-success-main/10 [&>svg]:ui-text-success-main";
          break;
        case "error":
          colorClass =
            "hover:ui-bg-error-main/10 active:ui-bg-error-main/10 [&>svg]:ui-text-error-main";
          break;
        case "info":
          colorClass =
            "hover:ui-bg-info-main/10 active:ui-bg-info-main/10 [&>svg]:ui-text-info-main";
          break;
        case "warning":
          colorClass =
            "hover:ui-bg-warning-main/10 active:ui-bg-warning-main/10 [&>svg]:ui-text-warning-main";
          break;
        case "neutral":
          colorClass =
            "hover:ui-bg-neutral-main/10 active:ui-bg-neutral-main/10 [&>svg]:ui-text-neutral-main";
          break;
        default:
          colorClass =
            "hover:ui-bg-primary-main/10 active:ui-bg-primary-main/10 [&>svg]:ui-text-primary-main";
      }
      return colorClass;
    case "text-on-container":
      switch (color) {
        case "primary":
          colorClass =
            "hover:ui-bg-primary-onContainer/10 active:ui-bg-primary-onContainer/10 [&>svg]:ui-text-primary-onContainer";
          break;
        case "secondary":
          colorClass =
            "hover:ui-bg-secondary-onContainer/10 active:ui-bg-secondary-onContainer/10 [&>svg]:ui-text-secondary-onContainer";
          break;
        case "success":
          colorClass =
            "hover:ui-bg-success-onContainer/10 active:ui-bg-success-onContainer/10 [&>svg]:ui-text-success-onContainer";
          break;
        case "error":
          colorClass =
            "hover:ui-bg-error-onContainer/10 active:ui-bg-error-onContainer/10 [&>svg]:ui-text-error-onContainer";
          break;
        case "info":
          colorClass =
            "hover:ui-bg-info-onContainer/10 active:ui-bg-info-onContainer/10 [&>svg]:ui-text-info-onContainer";
          break;
        case "warning":
          colorClass =
            "hover:ui-bg-warning-onContainer/10 active:ui-bg-warning-onContainer/10 [&>svg]:ui-text-warning-onContainer";
          break;
        case "neutral":
          colorClass =
            "hover:ui-bg-neutral-onContainer/10 active:ui-bg-neutral-onContainer/10 [&>svg]:ui-text-neutral-onContainer";
          break;
        default:
          colorClass =
            "hover:ui-bg-primary-onContainer/10 active:ui-bg-primary-onContainer/10 [&>svg]:ui-text-primary-onContainer";
      }
      return colorClass;
    case "halogen":
      baseClass =
        "active:ui-border-none active:ui-outline ui-border ui-border-neutral-99 ui-shadow ui-shadow-sm ";
      switch (color) {
        case "secondary":
          colorClass =
            "hover:ui-border-secondary-main ui-bg-surface-6 ui-outline-secondary-95 [&>svg]:ui-text-secondary-onContainer";
          break;
        case "success":
          colorClass =
            "hover:ui-border-success-main ui-bg-surface-6 ui-outline-success-95 [&>svg]:ui-text-success-onContainer";
          break;
        case "error":
          colorClass =
            "hover:ui-border-error-main ui-bg-surface-6 ui-outline-error-95 [&>svg]:ui-text-error-onContainer";
          break;
        case "info":
          colorClass =
            "hover:ui-border-info-main ui-bg-surface-6 ui-outline-info-95 [&>svg]:ui-text-info-onContainer";
          break;
        case "warning":
          colorClass =
            "hover:ui-border-warning-main ui-bg-surface-6 ui-outline-warning-95 [&>svg]:ui-text-warning-onContainer";
          break;
        case "neutral":
          colorClass =
            "hover:ui-border-neutral-main ui-bg-surface-6 ui-outline-neutral-95 [&>svg]:ui-text-neutral-onContainer";
          break;
        case "primary":
        default:
          colorClass =
            "hover:ui-border-primary-main ui-bg-surface-6 ui-outline-primary-95 [&>svg]:ui-text-primary-onContainer";
      }
      return baseClass + colorClass;
    default:
      return baseClass;
  }
};

const IconBtn = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      size = "md",
      color = "primary",
      variant = "contained",
      disabled = false,
      fullRounded = false,
      className,
      ...prop
    },
    ref,
  ) => {
    const classes =
      "ui-flex ui-justify-center ui-items-center ui-outline-3 disabled:ui-outline-none " +
      (fullRounded
        ? "ui-rounded-full "
        : size === "xs"
          ? "ui-rounded-lg "
          : "ui-rounded-xl ") +
      getSizeClasses(size) +
      " " +
      getVariantAndColorClasses(variant, color, disabled) +
      (className ? " " + className : "");

    return (
      <button ref={ref} className={classes} disabled={disabled} {...prop}>
        {cloneElement(children, {
          ...children.props,
          size:
            size === "xs" ? "md" : size === "sm" || size === "md" ? "lg" : "xl",
        })}
      </button>
    );
  },
);

export default IconBtn;
