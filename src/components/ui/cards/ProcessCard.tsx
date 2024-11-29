import { ContextDisplay_Utils } from "@utils/functions.ts";
import Typography  from "@components/ui/forms/Typography.tsx";
import NextImage from "@components/ui/gadgets/NextImage.tsx";
import { TEMPLATE_NEXT_IMAGE } from "@constants/env.ts";

interface Props {
  title?: string;
  sub?: string;
  img: string;
}

const ProcessCard = (props: Props) => {
  const { title, img, sub } = props;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-[100px] h-[100px] flex justify-center items-center">
        <NextImage src={img} alt="sample image" width={44} height={44} />
        <div className="absolute top-0 -z-1 right-1/2 translate-x-1/2 w-full h-full">
          <NextImage
            src={TEMPLATE_NEXT_IMAGE}
            alt="template img"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="flex flex-col py-1 text-center items-center gap-3">
        <Typography variant="h4" className="text-ink-bp">
          {ContextDisplay_Utils(title)}
        </Typography>
        <Typography variant="h5" className="text-ink-bs w-2/3">
          {ContextDisplay_Utils(sub)}
        </Typography>
      </div>
    </div>
  );
};

export default ProcessCard;
