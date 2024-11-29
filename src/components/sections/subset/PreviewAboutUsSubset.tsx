"use client";

import React from "react";
import TitleCard from "@components/ui/cards/TitleCard.tsx";
import { useTranslations } from "next-intl";
import Button from "@components/ui/forms/Button.tsx";
import Typography from "@components/ui/forms/Typography.tsx";
import NextImage from "@components/ui/gadgets/NextImage.tsx";
import { HEXAGON_LOGO_NEXT_IMAGE } from "@constants/env.ts";
import ArrowLeftIcon from "@components/ui/icons/ArrowLeftIcon.tsx";

function PreviewAboutUsSubset() {
  const t = useTranslations("webSiteConstant");

  return (
    <section>
      <div className="my-2">
        <TitleCard ti={t("buttons.aboutUs")} />
      </div>
      <div className="pb-4 flex gap-4 items-center">
        <NextImage
          src={HEXAGON_LOGO_NEXT_IMAGE}
          alt="hexagon logo image"
          width={350}
          height={350}
        />
        <div className=" gap-4">
          <Typography variant="b1" className="text-justify text-ink-bp">
            {t("sentences.aboutUsLandingDesc")}
          </Typography>
          <Button
            variant="halogen"
            size="sm"
            endIcon={<ArrowLeftIcon />}
            className="mt-4 shadow shadow-neutral-container"
          >
            {t("buttons.learnMoreAboutUs")}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default PreviewAboutUsSubset;
