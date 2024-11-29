import HelperText from "./HelperText.tsx";
import Label from "./Label.tsx";
import { TextFieldProps } from "@interfaces/components.ts";
import React, { useMemo } from "react";

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      labelProps,
      helperTextProps,
      type,
      label,
      requiredLabel = false,
      helperText,
      startIcon,
      endIcon,
      size = "md",
      className,
      ...prop
    },
    ref,
  ) => {
    const SizeProps = useMemo(() => {
      switch (size) {
        case "md":
          return "px-3 text-base leading-4 h-9";
        case "lg":
          return "px-4 text-base leading-4 h-11";
        case "xl":
          return "px-4 text-base leading-4 h-12";
        default:
          return "px-3 text-base leading-4 h-9";
      }
    }, [size]);

    const SizeIconProps = useMemo(() => {
      switch (size) {
        case "md":
          return "w-4";
        case "lg":
        case "xl":
          return "w-5";
        default:
          return "w-4";
      }
    }, [size]);

    return (
      <div className="text-field-base">
        {label && (
          <Label required={requiredLabel} {...labelProps}>
            {label}
          </Label>
        )}
        <div className="input-box relative">
          {startIcon && (
            <span
              className={`input-startIcon absolute inset-y-0 right-0 mr-2 flex items-center ${SizeIconProps}`}
            >
              {startIcon}
            </span>
          )}
          <input
            type={type || "text"}
            className={
              `input-base ${SizeProps}` + (className ? " " + className : "")
            }
            ref={ref}
            {...prop}
          />
          {endIcon && (
            <span
              className={`input-endIcon absolute inset-y-0 left-0 ml-2 flex items-center ${SizeIconProps}`}
            >
              {endIcon}
            </span>
          )}
        </div>
        {Boolean(helperText) && (
          <HelperText {...helperTextProps}>{helperText || ""}</HelperText>
        )}
      </div>
    );
  },
);

export default TextField;
