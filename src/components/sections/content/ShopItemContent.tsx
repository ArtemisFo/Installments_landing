import React from "react";
import MiddleBannerItems from "@sections/items/MiddleBannerItems.tsx";
import PreviewShopSubset from "@sections/subset/shops/PreviewShopSubset.tsx";
import ShopInfoSubset from "@sections/subset/shops/ShopInfoSubset.tsx";

function ShopItemContent() {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-center mt-[--header-height]">
          <PreviewShopSubset />
        </div>
        <div className="flex justify-center my-32">
          <ShopInfoSubset />
        </div>
        <div className="flex justify-center my-32">
          <MiddleBannerItems />
        </div>
      </div>
    </section>
  );
}

export default ShopItemContent;
