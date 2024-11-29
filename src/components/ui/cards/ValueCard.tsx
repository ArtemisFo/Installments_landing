import { ContextDisplay_Utils } from "@repo/utils";
import { Typography } from "@repo/ui";
import NextImage from "@components/ui/gadgets/NextImage.tsx";
import {
  BORDER_SHAPE_NEXT_IMAGE,
  FOURTH_SAMPLE_NEXT_IMAGE,
} from "@constants/env.ts";

interface Props {
  title?: string;
  subTitle?: string;
}

const ValueCard = (props: Props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="px-4 flex items-center">
        <div className="relative">
          <NextImage
            src={BORDER_SHAPE_NEXT_IMAGE}
            alt="sample image"
            width={80}
            height={80}
          />
          <div className="absolute top-0 right-1/2 translate-x-1/2 translate-y-1/2 w-fit h-fit">
            <NextImage
              src={FOURTH_SAMPLE_NEXT_IMAGE}
              alt="sample image"
              width={44}
              height={44}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 mt-4">
        <Typography variant="h4" className="text-ink-bp">
          {ContextDisplay_Utils(props.title)}
        </Typography>
        <Typography variant="h5" className="text-ink-bs w-2/3 text-center">
          {ContextDisplay_Utils(props.subTitle)}
        </Typography>
      </div>
    </div>
  );
};

export default ValueCard;
