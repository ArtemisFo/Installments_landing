"use client";

import React, { useMemo } from "react";
import { useTranslations } from "next-intl";
import TitleCard from "@components/ui/cards/TitleCard.tsx";
import { Typography } from "@repo/ui";
import NextImage from "@components/ui/gadgets/NextImage.tsx";
import DominanceItems from "@sections/items/DominanceItems.tsx";
import {
  BUILDING_FANTASY_NEXT_IMAGE,
  CATEGORY_FANTASY_NEXT_IMAGE,
  JOIN_US_NEXT_IMAGE,
} from "@constants/env.ts";

function JoinUsSubset() {
  const t = useTranslations("webSiteConstant");

  const dominanceDataList = useMemo(
    () => [
      {
        img: CATEGORY_FANTASY_NEXT_IMAGE,
        title: t("texts.productCategories"),
        count: "50",
      },
      {
        img: BUILDING_FANTASY_NEXT_IMAGE,
        title: t("texts.organization"),
        count: "50",
      },
    ],
    [],
  );

  return (
    <section>
      <div className="my-2">
        <TitleCard ti={t("texts.joinUs")} />
      </div>
      <div className="flex justify-between items-center mt-8">
        <div className="min-w-[300px]">
          <NextImage
            src={JOIN_US_NEXT_IMAGE}
            alt="hexagon mission image"
            width={300}
            height={300}
          />
        </div>
        <div className="flex flex-col">
          <Typography variant="b1" className="text-ink-bp">
            {t("sentences.joinUsDesc")}
          </Typography>
          <div className="mt-10">
            <DominanceItems data={dominanceDataList} badgeImg={false} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinUsSubset;
