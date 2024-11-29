"use client";

import React, { useMemo } from "react";
import { useTranslations } from "next-intl";
import Typography from "@components/ui/forms/Typography.tsx";
import ValueCard from "@components/ui/cards/ValueCard.tsx";

function OurValuesSubset() {
  const t = useTranslations("webSiteConstant");

  const dataList = useMemo(
    () => [
      {
        title: "ارزش های ما",
        sub: "لورم  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      },
      {
        title: "ارزش های ما",
        sub: "لورم  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      },
      {
        title: "ارزش های ما",
        sub: "لورم  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      },
      {
        title: "ارزش های ما",
        sub: "لورم  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      },
    ],
    [],
  );

  return (
    <section>
      <div className="px-4 flex items-center justify-center mb-14">
        <span className="hex me-1" />
        <Typography variant="h2" weight="bold">
          {t("texts.ourValues")}
        </Typography>
      </div>
      <div className="pb-4 flex">
        {dataList.map((val, index) => (
          <div key={index} className="flex flex-1">
            <ValueCard title={val.title} subTitle={val.sub} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurValuesSubset;
