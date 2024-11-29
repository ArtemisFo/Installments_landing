import NextImage from "@components/ui/gadgets/NextImage.tsx";
import { P_PERMISSIONS_NEXT_IMAGE } from "@constants/env.ts";
import React from "react";

function PSm() {
  return (
    <div className="transition-colors ease-linear border border-ink-bd rounded-xl bg-surface-6 hover:bg-primary-container hover:border-primary-onMain cursor-pointer p-1">
      <NextImage
        width={80}
        height={102}
        src={P_PERMISSIONS_NEXT_IMAGE}
        alt="psm permissions img"
      />
    </div>
  );
}

export default PSm;
