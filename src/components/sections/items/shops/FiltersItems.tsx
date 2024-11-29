import React from "react";
import { useTranslations } from "next-intl";

function FiltersItems() {
  const t = useTranslations("webSiteConstant");

  return (
    <div className="w-full">
      <div className="border border-ink-bd w-full rounded-2xl h-full"></div>
    </div>
  );
}

export default FiltersItems;
