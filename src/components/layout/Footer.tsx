"use client";

import React, { memo, useMemo } from "react";
import { useTranslations } from "next-intl";
import { HorizontalLogo, Typography } from "@repo/ui";
import {
  PAGE_ROUTE_ABOUT_US,
  PAGE_ROUTE_CONTACT_US,
  PAGE_ROUTE_COOPERATION,
  PAGE_ROUTE_HOME,
  PAGE_ROUTE_SHOPS,
} from "@constants/env.ts";
import NextLink from "@components/ui/gadgets/NextLink.tsx";
import PSm from "@components/ui/smallCards/permissions/PSm.tsx";
import SSm from "@components/ui/smallCards/permissions/SSm.tsx";
import TSm from "@components/ui/smallCards/permissions/TSm.tsx";
import SocialSm from "@components/ui/smallCards/SocialSm.tsx";

function Footer() {
  const t = useTranslations("webSiteConstant");

  const internalLinkLis = useMemo(() => {
    return [
      { name: t("buttons.mainPage"), link: PAGE_ROUTE_HOME },
      { name: t("buttons.shops"), link: PAGE_ROUTE_SHOPS },
      { name: t("buttons.cooperationRequest"), link: PAGE_ROUTE_CONTACT_US },
      { name: t("buttons.aboutUs"), link: PAGE_ROUTE_ABOUT_US },
      { name: t("buttons.contactUs"), link: PAGE_ROUTE_COOPERATION },
    ] as const;
  }, []);

  const categoryList = useMemo(() => {
    return [
      { name: "دسته بندی 1" },
      { name: "دسته بندی 2" },
      { name: "دسته بندی 3" },
      { name: "دسته بندی 4" },
      { name: "دسته بندی 5" },
    ] as const;
  }, []);

  return (
    <footer>
      <div className="flex gap-4 w-full bg-surface-6 shadow footer-rounded relative footer-line py-20 px-15">
        <div className="flex-1">
          <HorizontalLogo />
          <Typography
            variant="b1"
            className="text-ink-bs mt-8 text-justify"
            weight="regular"
          >
            {t("sentences.footerDesc")}
          </Typography>
        </div>
        <div className="flex-1 items-center flex flex-col">
          <div>
            <Typography variant="c1" weight="bold" className="text-ink-bp">
              {t("buttons.mainPage")}
            </Typography>
            {internalLinkLis.map((val, index) => (
              <div key={index} className="my-4 w-fit">
                <NextLink href={val.link}>
                  <Typography
                    variant="c1"
                    weight="regular"
                    className="text-ink-bs"
                  >
                    {val.name}
                  </Typography>
                </NextLink>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 items-center flex flex-col">
          <div>
            <Typography variant="c1" weight="bold" className="text-ink-bp">
              {t("texts.productCategories")}
            </Typography>
            {categoryList.map((val, index) => (
              <div key={index} className="my-4 w-fit">
                <Typography
                  variant="c1"
                  weight="regular"
                  className="text-ink-bs"
                >
                  {val.name}
                </Typography>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div>
            <Typography variant="c1" weight="bold" className="text-ink-bp">
              {t("texts.permissions")}
            </Typography>
            <div className="flex gap-4 mt-3">
              <PSm />
              <SSm />
              <TSm />
            </div>
          </div>
          <div className="mt-8">
            <Typography variant="c1" weight="bold" className="text-ink-bp">
              {t("buttons.contactUs")}
            </Typography>
            <div className="flex gap-4 mt-3">
              <SocialSm />
              <SocialSm />
              <SocialSm />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
