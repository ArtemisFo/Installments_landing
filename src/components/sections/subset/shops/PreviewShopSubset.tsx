import React from "react";
import NextImage from "@components/ui/gadgets/NextImage.tsx";
import { Typography } from "@repo/ui";
import { LocationIcon, CategoryIcon } from "@repo/icon";
import { useTranslations } from "next-intl";
import {
  SINGLE_SHOP_NEXT_IMAGE,
  WALL_PAPER_NEXT_IMAGE,
} from "@constants/env.ts";

interface Props {}

function PreviewShopSubset(props: Props) {
  const t = useTranslations("webSiteConstant");

  return (
    <div className="relative">
      <NextImage
        src={WALL_PAPER_NEXT_IMAGE}
        alt="shop wall paper img"
        width={1280}
        height={409}
      />
      <div className="absolute bottom-0 right-1/2 translate-x-1/2 -translate-y-1/2">
        <NextImage
          src={SINGLE_SHOP_NEXT_IMAGE}
          alt="shop logo img"
          width={200}
          height={200}
        />
      </div>
      <div className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2">
        <div className="w-[550px] p-7 shadow rounded-xl bg-surface-6">
          <div className="flex items-center justify-center">
            <span className="hex me-1" />
            <Typography variant="h1" className="text-ink-bp">
              فروشگاه پارسیک
            </Typography>
            <span className="hex ms-1" />
          </div>
          <div className="flex gap-2 w-full h-full justify-between mt-8">
            <div className="flex items-center gap-1 flex-1 justify-start">
              <LocationIcon className="text-ink-bs" />
              <Typography variant="s1" className="text-ink-bs">
                تهران
              </Typography>
            </div>
            <div className="flex items-center gap-1 flex-1 justify-center">
              <CategoryIcon className="text-ink-bs" />
              <Typography variant="s1" className="text-ink-bs">
                مد و پوشاک
              </Typography>
            </div>
            <div className="flex items-center gap-1 flex-1 justify-end">
              <Typography variant="s1" className="text-ink-bs">
                {t("texts.productDiversity", { count: 100 + "+" })}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewShopSubset;
