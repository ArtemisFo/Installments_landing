import { LogoSizeType } from "@interfaces/general.ts";
import horizontalLogo from "public/statics/images/logos/horizontal.png";
import { LogoProps } from "@interfaces/components.ts";

const getImgClasses = (size: LogoSizeType) => {
  switch (size) {
    case "xs":
      return "h-6 w-[72px]";
    case "sm":
      return "h-8 w-[98px]";
    case "md":
      return "h-12 w-36";
    case "lg":
      return "h-16 w-[190px]";
    case "xl":
      return "h-24 w-[280px]";
    default:
      return "h-12 w-36";
  }
};

const HorizontalLogo = ({
  alt,
  size = "md",
  className,
  ...otherProps
}: LogoProps) => {
  const classes = getImgClasses(size);

  return (
    <img
      src={horizontalLogo.src}
      alt={alt || "homeca"}
      className={`${classes}${className ? " " + className : ""}`}
      {...otherProps}
    />
  );
};

export default HorizontalLogo;
