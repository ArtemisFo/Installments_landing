import React from "react";
import InfoAboutUsSubset from "@sections/subset/InfoAboutUsSubset.tsx";
import MiddleBannerItems from "@sections/items/MiddleBannerItems.tsx";

function ContactUsContent() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <div className="my-32">
          <InfoAboutUsSubset />
        </div>
        <div className="flex justify-center my-32">
          <MiddleBannerItems />
        </div>
      </div>
    </div>
  );
}

export default ContactUsContent;
