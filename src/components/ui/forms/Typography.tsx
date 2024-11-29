import { ElementType, HTMLProps } from "react";
import {
  TypographySizeType,
  TypographyVariantType,
} from "@interfaces/general.ts";

interface Props extends HTMLProps<HTMLParagraphElement> {
  el?: ElementType;
  variant?: TypographyVariantType;
  weight?: TypographySizeType;
}

const getClasses = (
  variant: TypographyVariantType,
  weight: TypographySizeType,
) => {
  let weightClass: string, variantClasses: string;
  switch (weight) {
    case "bold":
      weightClass = "font-bold";
      break;
    case "medium":
      weightClass = "font-medium";
      break;
    case "regular":
      weightClass = "font-normal";
      break;
    default:
      weightClass = "font-normal";
  }
  switch (variant) {
    case "b1":
      variantClasses = "text-lg leading-11";
      break;
    case "c1":
      variantClasses = "text-base leading-4";
      break;
    case "c2":
      variantClasses = "text-sm leading-14";
      break;
    case "c3":
      variantClasses = "text-xs leading-4";
      break;
    case "h1":
      variantClasses = "text-3xl md:text-5xl leading-6";
      break;
    case "h2":
      variantClasses = "text-2xl md:text-4xl leading-11";
      break;
    case "h3":
      variantClasses = "text-xl md:text-3xl leading-12";
      break;
    case "h4":
      variantClasses = "text-lg md:text-2xl leading-4";
      break;
    case "h5":
      variantClasses = "text-base md:text-lg leading-14";
      break;
    case "h6":
      variantClasses = "text-sm leading-4";
      break;
    case "s1":
      variantClasses = "text-xl  md:text-2xl leading-11";
      break;
    case "t1":
      variantClasses = "text-2xl md:text-3xl leading-15";
      break;
    default:
      variantClasses = "text-xl leading-11";
  }
  return weightClass + " " + variantClasses;
};

const getElement = (variant: TypographyVariantType) => {
  switch (variant) {
    case "b1":
    case "s1":
      return "p";
    case "c1":
    case "c2":
    case "c3":
      return "span";
    case "h1":
    case "t1":
      return "h1";
    case "h2":
      return "h2";
    case "h3":
      return "h3";
    case "h4":
      return "h4";
    case "h5":
      return "h5";
    case "h6":
      return "h6";
    default:
      return "p";
  }
};

const Typography = ({
  el,
  variant = "b1",
  weight = "medium",
  className,
  ...otherProps
}: Props) => {
  const Tag = getElement(variant);
  const classes = getClasses(variant, weight);
  return (
    <Tag
      className={classes + (className ? " " + className : "")}
      {...otherProps}
    />
  );
};

export default Typography;
