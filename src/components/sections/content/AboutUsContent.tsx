import React, { useMemo } from "react";
import TopBannerItems from "@sections/items/TopBannerItems.tsx";
import MiddleBannerItems from "@sections/items/MiddleBannerItems.tsx";
import OurValuesSubset from "@sections/subset/OurValuesSubset.tsx";
import PreviewAboutUsSubset from "@sections/subset/PreviewAboutUsSubset.tsx";
import DominanceItems from "@sections/items/DominanceItems.tsx";
import MissionsSubset from "@sections/subset/MissionsSubset.tsx";
import { useTranslations } from "next-intl";
import {
  BUILDING_FANTASY_NEXT_IMAGE,
  CATEGORY_FANTASY_NEXT_IMAGE,
  STORE_FANTASY_NEXT_IMAGE,
} from "@constants/env.ts";

function HomeContent() {
  const t = useTranslations("webSiteConstant");

  const dominanceDataList = useMemo(
    () => [
      {
        img: CATEGORY_FANTASY_NEXT_IMAGE,
        title: t("texts.productCategories"),
        count: "50",
      },
      {
        img: STORE_FANTASY_NEXT_IMAGE,
        title: t("texts.shop"),
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
      <div className="max-w-screen-xl mx-auto">
        <div className="my-32">
          <PreviewAboutUsSubset />
        </div>
        <div className="flex justify-center my-24">
          <MiddleBannerItems />
        </div>
        <OurValuesSubset />
        <div className="my-32">
          <DominanceItems data={dominanceDataList} />
        </div>
        <div className="my-32">
          <MissionsSubset />
        </div>
        <div className="flex justify-center my-32">
          <TopBannerItems />
        </div>
      </div>
    </section>
  );
}

export default HomeContent;
