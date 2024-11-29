"use client";

import React, { HTMLProps } from "react";
import Icon from "./icon.tsx";

const HelperText = ({
  children,
  className,
  ...prop
}: HTMLProps<HTMLParagraphElement>) => {
  return (
    <div className="flex items-start">
      <Icon />
      <span
        className={`text-sm leading-14 font-medium ms-2 text-ink-bs${className ? " " + className : ""}`}
        {...prop}
      >
        {children}
      </span>
    </div>
  );
};

export default HelperText;
