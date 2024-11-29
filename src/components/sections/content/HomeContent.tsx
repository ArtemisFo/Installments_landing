import TopScreenSubset from "@sections/subset/TopScreenSubset.tsx";
import React, { useMemo } from "react";
import TopBannerItems from "@sections/items/TopBannerItems.tsx";
import MiddleBannerItems from "@sections/items/MiddleBannerItems.tsx";
import OrganizationSlideSubset from "@sections/subset/OrganizationSlideSubset.tsx";
import ShopsSlideSubset from "@sections/subset/ShopsSlideSubset.tsx";
import ProductsCategorySlideSubset from "@sections/subset/ProductsCategorySlideSubset.tsx";
import OurValuesSubset from "@sections/subset/OurValuesSubset.tsx";
import PreviewAboutUsSubset from "@sections/subset/PreviewAboutUsSubset.tsx";
import DominanceItems from "@sections/items/DominanceItems.tsx";
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
    <div>
      <TopScreenSubset />
      <div className="max-w-screen-xl mx-auto">
        <div className="my-32">
          <PreviewAboutUsSubset />
        </div>
        <div className="flex justify-center my-24">
          <TopBannerItems />
        </div>
        <OurValuesSubset />
        <div className="my-32">
          <DominanceItems data={dominanceDataList} />
        </div>
        <div className="flex justify-center my-32">
          <MiddleBannerItems />
        </div>
        <div className="my-32">
          <ProductsCategorySlideSubset />
        </div>
        <div className="my-32">
          <ShopsSlideSubset />
        </div>
        <div className="flex justify-center my-32">
          <TopBannerItems />
        </div>
        <div className="my-32">
          <OrganizationSlideSubset />
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
