import React from "react";
import ProductCard from "@components/ui/cards/ProductCard.tsx";
import ProductListSkeleton from "@components/skeletons/ProductListSkeleton.tsx";
import NotResults from "@components/ui/warehouse/NotResults.tsx";
import NextLink from "@components/ui/gadgets/NextLink.tsx";
import { PAGE_ROUTE_SHOPS } from "@constants/env.ts";
import {
  GetListResAPIType,
  StoresResObjAPIType,
} from "@interfaces/response.ts";

interface Props {
  data?: GetListResAPIType<StoresResObjAPIType> | null;
  isLoading?: boolean;
}

function ShopListSubset(props: Props) {
  const { data, isLoading } = props;

  return isLoading ? (
    <div className="grid grid-cols-5 w-full gap-4">
      <ProductListSkeleton />
    </div>
  ) : !!data?.data?.length ? (
    <div className="grid grid-cols-5 w-full gap-4">
      {data?.data?.map((val, index) => (
        <NextLink href={`${PAGE_ROUTE_SHOPS}${123}`} key={index}>
          <ProductCard height={120} width={147} data={val} />
        </NextLink>
      ))}
    </div>
  ) : (
    <div className="flex justify-center w-full min-h-screen">
      <NotResults />
    </div>
  );
}

export default ShopListSubset;
