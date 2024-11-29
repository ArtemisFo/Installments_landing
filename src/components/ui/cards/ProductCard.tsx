import Typography from "@components/ui/forms/Typography.tsx";
import NextImage from "@components/ui/gadgets/NextImage.tsx";
import React from "react";
import { ContextDisplay_Utils } from "@utils/functions.ts";
import LocationIcon from "@components/ui/icons/LocationIcon.tsx";
import CategoryIcon from "@components/ui/icons/CategoryIcon.tsx";
import { useTranslations } from "next-intl";
import { THIRD_SAMPLE_NEXT_IMAGE } from "@constants/env.ts";
import { StoresResObjAPIType } from "@interfaces/response.ts";

interface Props {
  data?: StoresResObjAPIType;
  width?: number;
  height?: number;
}

const ProductCard = (props: Props) => {
  const t = useTranslations("webSiteConstant");

  const { data, width, height } = props;

  return (
    <div className="secondary-card">
      <NextImage
        width={width ?? 80}
        height={height ?? 80}
        src={THIRD_SAMPLE_NEXT_IMAGE || ""}
        alt="sample img"
      />
      <Typography
        variant="c3"
        className="text-ink-bp mt-2 w-full"
        weight="bold"
      >
        {ContextDisplay_Utils(data?.title)}
      </Typography>
      <div className="flex mt-2 flex-col gap-2 w-full">
        <div className="flex items-center gap-1 w-full">
          <Typography variant="c3" className="text-ink-bs">
            {t("texts.productDiversity", { count: 100 + "+" })}
          </Typography>
        </div>
        <div className="flex items-center gap-1 w-full">
          <CategoryIcon className="text-ink-bs" />
          <Typography variant="c3" className="text-ink-bs">
            {ContextDisplay_Utils(data?.category_type?.title)}
          </Typography>
        </div>
        <div className="flex items-center gap-1 w-full">
          <LocationIcon className="text-ink-bs" />
          <Typography variant="c3" className="text-ink-bs">
            {ContextDisplay_Utils(data?.address)}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
