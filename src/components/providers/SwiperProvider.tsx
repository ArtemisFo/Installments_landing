"use client";

import { Swiper } from "swiper/react";
import React, { useRef } from "react";
import { Swiper as SwiperType } from "swiper/types";
import { ArrowLeftIcon, ArrowRightIcon } from "@repo/icon";
import { IconBtn } from "@repo/ui";
import { Children } from "@interfaces/general.ts";

interface Props {
  children?: Children;
}

function SwiperProvider(props: Props) {
  const ref = useRef<null | SwiperType>(null);

  const { children } = props;

  return (
    <>
      <div className="pb-4">
        <Swiper
          slidesPerView={8}
          spaceBetween={16}
          onInit={(sw) => (ref.current = sw)}
          pagination={{
            clickable: true,
          }}
        >
          {children}
        </Swiper>
      </div>
      <div className="flex items-center justify-center mb-2 gap-2">
        <IconBtn
          variant="halogen"
          size="sm"
          onClick={() => ref?.current?.slideNext()}
        >
          <ArrowRightIcon />
        </IconBtn>
        <IconBtn
          variant="halogen"
          size="sm"
          onClick={() => ref?.current?.slidePrev()}
        >
          <ArrowLeftIcon />
        </IconBtn>
      </div>
    </>
  );
}

export default SwiperProvider;
