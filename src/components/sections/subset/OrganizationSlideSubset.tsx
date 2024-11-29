"use client";

import React from "react";
import TitleCard from "@components/ui/cards/TitleCard.tsx";
import { useTranslations } from "next-intl";
import Button from "@components/ui/forms/Button.tsx";
import ArrowLeftIcon from "@components/ui/icons/ArrowLeftIcon.tsx";
// @ts-ignore
import { SwiperSlide } from "swiper/react";
import SecondarySlideCard from "@components/ui/cards/SecondarySlideCard.tsx";
import { FIRST_SAMPLE_NEXT_IMAGE } from "@constants/env.ts";
import SwiperProvider from "@components/providers/SwiperProvider.tsx";

function OrganizationSlideSubset() {
  const t = useTranslations("webSiteConstant");

  return (
    <section>
      <div className="my-2">
        <TitleCard
          ti={t("texts.contractingOrganizations")}
          action={
            <Button variant="halogen" size="sm" endIcon={<ArrowLeftIcon />}>
              {t("buttons.viewAll")}
            </Button>
          }
        />
      </div>
      <div className="pb-4">
        <SwiperProvider>
          {Array(20)
            .fill(true)
            .map((val, index) => (
              <SwiperSlide key={index}>
                <SecondarySlideCard
                  data={{
                    img: FIRST_SAMPLE_NEXT_IMAGE,
                    txt: "سازمان تامین اجتماعی",
                  }}
                />
              </SwiperSlide>
            ))}
        </SwiperProvider>
      </div>
    </section>
  );
}

export default OrganizationSlideSubset;
