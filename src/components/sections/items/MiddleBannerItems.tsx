import NextImage from "@components/ui/gadgets/NextImage.tsx";
import {
  SECONDARY_DOTTED_SQUARE_NEXT_IMAGE,
  SECONDARY_BANNER_NEXT_IMAGE,
} from "@constants/env.ts";
import React from "react";

function MiddleBannerItems() {
  return (
    <div className="relative w-fit h-fit flex">
      <div className="absolute -z-1 -top-5 -right-5">
        <NextImage
          width={117}
          height={128}
          src={SECONDARY_DOTTED_SQUARE_NEXT_IMAGE}
          alt="installment logo"
        />
      </div>
      <NextImage
        width={1160}
        height={148}
        src={SECONDARY_BANNER_NEXT_IMAGE}
        alt="installment logo"
      />
      <div className="absolute -z-1 -bottom-5 -left-5">
        <NextImage
          width={117}
          height={128}
          src={SECONDARY_DOTTED_SQUARE_NEXT_IMAGE}
          alt="installment logo"
        />
      </div>
    </div>
  );
}

export default MiddleBannerItems;
