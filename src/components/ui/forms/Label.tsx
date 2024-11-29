"use client";

import React from "react";
import { LabelProps } from "@interfaces/components.ts";

const Label = ({ children, required = false, ...prop }: LabelProps) => {
  return (
    <span
      className="mb-2 text-base font-medium leading-4 text-ink-bp"
      {...prop}
    >
      {children}
      {required && <span className="ms-1 inline-block text-error-main">*</span>}
    </span>
  );
};

export default Label;
