"use client";

import React, { useMemo } from "react";
import { useTranslations } from "next-intl";
import TitleCard from "@components/ui/cards/TitleCard.tsx";
import Typography from "@components/ui/forms/Typography.tsx";
import NextImage from "@components/ui/gadgets/NextImage.tsx";
import {
  CALL_TINY_NEXT_IMAGE,
  CONTACT_US_NEXT_IMAGE,
  LOCATION_TINY_NEXT_IMAGE,
  MESSAGE_TINY_NEXT_IMAGE,
  VERTICAL_DOTTED_NEXT_IMAGE,
} from "@constants/env.ts";

function InfoAboutUsSubset() {
  const t = useTranslations("webSiteConstant");

  const dataList = useMemo(
    () => [
      {
        title: t("texts.address"),
        value:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با\n" +
          "استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه مراجعه\n" +
          "حضوری: شنبه تا چهارشنبه از ساعت ۹ الی ۱۸، پنجشنبه از ساعت ۹ الی ۱۴",
        img: LOCATION_TINY_NEXT_IMAGE,
      },
      {
        title: t("texts.call"),
        value: "021-123456789 | 021-123456789",
        img: CALL_TINY_NEXT_IMAGE,
      },
      {
        title: t("texts.email"),
        value: "info@aghsati.com",
        img: MESSAGE_TINY_NEXT_IMAGE,
      },
    ],
    [],
  );

  return (
    <section>
      <div className="my-2">
        <TitleCard ti={t("buttons.contactUs")} />
      </div>
      <div className="flex justify-between items-center mt-8">
        <div>
          <Typography variant="t1" className="text-ink-bp">
            {t("sentences.contactUsSubTitle")}
          </Typography>
          {dataList.map((val, index) => (
            <div key={index} className="flex flex-col mt-8">
              <div className="flex items-center">
                <NextImage
                  src={val.img}
                  alt="address image"
                  width={24}
                  height={24}
                />
                <Typography variant="s1" className="text-ink-bp ms-2">
                  {val.title}:
                </Typography>
              </div>
              <Typography variant="b1" className="text-ink-bs mt-3">
                {val.value}
              </Typography>
            </div>
          ))}
        </div>
        <div className="relative w-full flex justify-end">
          <NextImage
            src={CONTACT_US_NEXT_IMAGE}
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

export default InfoAboutUsSubset;
