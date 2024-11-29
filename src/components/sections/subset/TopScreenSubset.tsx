import NextImage from "@components/ui/gadgets/NextImage.tsx";
import React from "react";
import { Button, Typography } from "@repo/ui";
import { useTranslations } from "next-intl";
import { ArrowLeftIcon } from "@repo/icon";
import {
  DOTTED_LINE_NEXT_IMAGE,
  TOP_SCREEN_NEXT_IMAGE,
} from "@constants/env.ts";

function TopScreenSubset() {
  const t = useTranslations("webSiteConstant");

  return (
    <section>
      <div className="-z-1 absolute top-0 right-1/2 translate-x-1/2 bg-primary-5 h-[600px] w-full rounded-b-[100px] max-w-screen-3xl">
        <div className="absolute top-1/2 ui-left-0 pe-4">
          <NextImage
            width={28}
            src={DOTTED_LINE_NEXT_IMAGE}
            alt="left side img"
          />
        </div>
        <div className="absolute top-1/2 ui-right-0 ps-4">
          <NextImage
            width={28}
            src={DOTTED_LINE_NEXT_IMAGE}
            alt="right side img"
          />
        </div>
      </div>
      <div className="flex justify-center pt-4 relative [&>img]:rounded-b-[5rem] [&>img]:rounded-t-3xl">
        <NextImage
          width={1360}
          height={651}
          style={{
            width: "1360px",
            height: "650px",
            display: "block",
          }}
          src={TOP_SCREEN_NEXT_IMAGE}
          alt="installment logo"
        />
        <div className="absolute bottom-1/2 right-0 z-1 -translate-x-1/3">
          <div className="flex flex-col gap-8">
            <Typography
              variant="h1"
              weight="bold"
              className="text-ink-wp !text-[40px]"
            >
              {t("texts.landingTitle")}
            </Typography>
            <Typography variant="h2" className="text-ink-wp">
              {t("texts.landingDesc")}
            </Typography>
            <Button className="w-fit" endIcon={<ArrowLeftIcon />}>
              {t("buttons.viewStores")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopScreenSubset;
