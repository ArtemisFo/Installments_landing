"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import FiltersItems from "@sections/items/shops/FiltersItems.tsx";
import ShopListSubset from "@sections/subset/shops/ShopListSubset.tsx";
import TitleCard from "@components/ui/cards/TitleCard.tsx";
import { Get_StoresListAPI } from "@http/api/stores.ts";
import { StatusSuccess_Utils } from "@utils/functions.ts";
import Snackbar from "@utils/SnackbarUtils.ts";
import {
  GetListResAPIType,
  StoresResObjAPIType,
} from "@interfaces/response.ts";

function ShopsContent() {
  const t = useTranslations("webSiteConstant");
  const [storesList, setStoresList] =
    useState<GetListResAPIType<StoresResObjAPIType> | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getStoresList = () => {
    setIsLoading(true);
    Get_StoresListAPI()
      .then((response) => {
        if (!response.ok || !StatusSuccess_Utils(response.status)) {
          Snackbar.error("Network response was not ok");
        }
        return response.json();
      })
      .then((res: GetListResAPIType<StoresResObjAPIType>) => setStoresList(res))
      .catch((error) => Snackbar.error(error?.message))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (storesList === null) getStoresList();
  }, []);

  return (
    <section className="max-w-screen-xl mx-auto py-16">
      <div>
        <TitleCard ti={t("texts.contractingShops")} />
      </div>
      <div className="flex pt-8 gap-4">
        <div className="flex w-1/4">
          <FiltersItems />
        </div>
        <div className="flex w-3/4">
          <ShopListSubset data={storesList} isLoading={isLoading} />
        </div>
      </div>
    </section>
  );
}

export default ShopsContent;
