"use client";

import React from "react";
import { useTranslations } from "next-intl";
import WordBadgeSm from "@components/ui/smallCards/WordBadgeSm.tsx";
import RegistrationFormItems from "@sections/items/RegistrationFormItems.tsx";
import NextImage from "@components/ui/gadgets/NextImage.tsx";
import { COOPERATION_FORM_NEXT_IMAGE } from "@constants/env.ts";

function CooperationRegistrationFormSubset() {
  const t = useTranslations("webSiteConstant");

  return (
    <section>
      <div className="relative shadow-lg p-4 bg-surface-6 rounded-lg h-[673px] overflow-hidden">
        <div className="w-2/3">
          <div className="my-2 flex justify-center">
            <WordBadgeSm
              variant="t1"
              txt={`${t("texts.cooperationRegistrationForm")}:`}
            />
          </div>
          <div className="flex justify-between items-center mt-8">
            <RegistrationFormItems />
          </div>
        </div>
        <div className="absolute top-0 -left-2/3 w-full">
          <NextImage
            src={COOPERATION_FORM_NEXT_IMAGE}
            alt="cooperation form img"
            width={433}
            height={473}
          />
        </div>
      </div>
    </section>
  );
}

export default CooperationRegistrationFormSubset;
