import Typography  from "@components/ui/forms/Typography.tsx";
import NextImage from "@components/ui/gadgets/NextImage.tsx";
import React from "react";
import { ContextDisplay_Utils } from "@utils/functions.ts";

interface Props {
  data?: { img: string; txt: string };
  width?: number;
  height?: number;
}

const SecondarySlideCard = (props: Props) => {
  const { data, width, height } = props;
  return (
    <div className="secondary-card">
      <NextImage
        width={width ?? 80}
        height={height ?? 80}
        src={data?.img || ""}
        alt="sample img"
      />
      <Typography variant="c3" className="text-ink-bp text-center mt-2">
        {ContextDisplay_Utils(data?.txt)}
      </Typography>
    </div>
  );
};

export default SecondarySlideCard;
