import React from "react";
import MiddleBannerItems from "@sections/items/MiddleBannerItems.tsx";
import JoinUsSubset from "@sections/subset/JoinUsSubset.tsx";
import CooperationRegistrationFormSubset from "@sections/subset/CooperationRegistrationFormSubset.tsx";
import CooperationRegistrationProcessItems from "@sections/items/CooperationRegistrationProcessItems.tsx";

function CooperationContent() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <div className="my-32">
          <JoinUsSubset />
        </div>
        <div className="my-32">
          <CooperationRegistrationProcessItems />
        </div>
        <div className="my-32">
          <CooperationRegistrationFormSubset />
        </div>
        <div className="flex justify-center my-32">
          <MiddleBannerItems />
        </div>
      </div>
    </div>
  );
}

export default CooperationContent;
