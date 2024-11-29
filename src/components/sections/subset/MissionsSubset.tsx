"use client";

import React from "react";
import { useTranslations } from "next-intl";
import TitleCard from "@components/ui/cards/TitleCard.tsx";
import Typography from "@components/ui/forms/Typography.tsx";
import NextImage from "@components/ui/gadgets/NextImage.tsx";
import {
  HEXAGON_MISSION_NEXT_IMAGE,
  VERTICAL_DOTTED_NEXT_IMAGE,
} from "@constants/env.ts";

function MissionsSubset() {
  const t = useTranslations("webSiteConstant");

  return (
    <section>
      <div className="my-2">
        <TitleCard ti={t("texts.installmentMission")} />
      </div>
      <div className="flex justify-between items-center mt-8">
        <Typography variant="b1" className="text-ink-bs text-justify pe-8">
          {t("sentences.installmentMissionDesc")}
        </Typography>
        <div className="relative w-full">
          <NextImage
            src={HEXAGON_MISSION_NEXT_IMAGE}
            alt="hexagon mission image"
            width={300}
            height={300}
          />
          <div className="absolute top-0 left-0 -translate-x-1/4 translate-y-12 rotate-90 -z-1">
            <NextImage
              src={VERTICAL_DOTTED_NEXT_IMAGE}
              alt="hexagon mission image"
              width={122}
              height={28}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionsSubset;
