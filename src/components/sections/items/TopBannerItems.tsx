import NextImage from "@components/ui/gadgets/NextImage.tsx";
import {
  PRIMARY_DOTTED_SQUARE_NEXT_IMAGE,
  PRIMARY_BANNER_NEXT_IMAGE,
} from "@constants/env.ts";
import React from "react";

function TopBannerItems() {
  return (
    <div className="relative w-fit h-fit flex">
      <div className="absolute -z-1 -top-5 -right-5">
        <NextImage
          width={117}
          height={128}
          src={PRIMARY_DOTTED_SQUARE_NEXT_IMAGE}
          alt="installment logo"
        />
      </div>
      <NextImage
        width={1160}
        height={148}
        src={PRIMARY_BANNER_NEXT_IMAGE}
        alt="installment logo"
      />
      <div className="absolute -z-1 -bottom-5 -left-5">
        <NextImage
          width={117}
          height={128}
          src={PRIMARY_DOTTED_SQUARE_NEXT_IMAGE}
          alt="installment logo"
        />
      </div>
    </div>
  );
}

export default TopBannerItems;
