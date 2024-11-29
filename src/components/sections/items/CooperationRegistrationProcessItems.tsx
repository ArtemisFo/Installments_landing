"use client";

import React, { useMemo } from "react";
import { useTranslations } from "next-intl";
import WordBadgeSm from "@components/ui/smallCards/WordBadgeSm.tsx";
import { FOURTH_SAMPLE_NEXT_IMAGE } from "@constants/env.ts";
import ProcessCard from "@components/ui/cards/ProcessCard.tsx";

function CooperationRegistrationProcessItems() {
  const t = useTranslations("webSiteConstant");

  const dataList = useMemo(
    () => [
      {
        img: FOURTH_SAMPLE_NEXT_IMAGE,
        title: t("texts.chooseCooperationType"),
        sub: t("sentences.chooseCooperationTypeDesc"),
      },
      {
        img: FOURTH_SAMPLE_NEXT_IMAGE,
        title: t("texts.submitSpecification"),
        sub: t("sentences.submitSpecificationDesc"),
      },
      {
        img: FOURTH_SAMPLE_NEXT_IMAGE,
        title: t("texts.supportTeamContactYou"),
        sub: t("sentences.supportTeamContactYouDesc"),
      },
      {
        img: FOURTH_SAMPLE_NEXT_IMAGE,
        title: t("texts.contractRegistration"),
        sub: t("sentences.contractRegistrationDesc"),
      },
    ],
    [],
  );

  return (
    <section>
      <div className="my-2 flex justify-center">
        <WordBadgeSm txt={`${t("texts.cooperationRegistrationProcess")}:`} />
      </div>
      <div className="flex justify-between items-center mt-8">
        {dataList.map((val, index) => (
          <div key={index}>
            <ProcessCard img={val.img} title={val.title} sub={val.sub} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CooperationRegistrationProcessItems;
