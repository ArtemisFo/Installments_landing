import React from "react";
import { useTranslations } from "next-intl";
import DomCard from "@components/ui/cards/DomCard.tsx";
import NextImage from "@components/ui/gadgets/NextImage.tsx";
import { VERTICAL_DOTTED_NEXT_IMAGE } from "@constants/env.ts";

interface Props {
  data: { title: string; img: string; count: string }[];
  badgeImg?: boolean;
}

function DominanceItems(props: Props) {
  const t = useTranslations("webSiteConstant");
  const { data, badgeImg = true } = props;

  return (
    <section>
      <div className="relative bg-surface-6 shadow shadow-primary-onMain values-card-line p-4 rounded-3xl">
        <div className="flex items-center justify-around">
          {data.map((val, index) => (
            <div
              key={index}
              className="flex flex-1 justify-center border-l border-ink-bd last-of-type:border-none"
            >
              <DomCard title={val.title} img={val.img} count={val.count} />
            </div>
          ))}
        </div>
      </div>
      {badgeImg && (
        <div className="flex items-center justify-between py-4 px-16 md:px-32">
          <NextImage
            src={VERTICAL_DOTTED_NEXT_IMAGE}
            alt="sample image"
            width={122}
            height={28}
          />
          <NextImage
            src={VERTICAL_DOTTED_NEXT_IMAGE}
            alt="sample image"
            width={122}
            height={28}
          />
        </div>
      )}
    </section>
  );
}

export default DominanceItems;
