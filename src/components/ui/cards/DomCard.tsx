import { ContextDisplay_Utils } from "@utils/functions.ts";
import Typography  from "@components/ui/forms/Typography.tsx";
import NextImage from "@components/ui/gadgets/NextImage.tsx";
import BadgeCountSm from "@components/ui/smallCards/BadgeCountSm.tsx";

interface Props {
  title?: string;
  count?: string | number;
  img: string;
}

const DomCard = (props: Props) => {
  const { title, img, count } = props;

  return (
    <div className="flex gap-4">
      <div>
        <NextImage src={img} alt="sample image" width={80} height={80} />
      </div>
      <div className="flex flex-col justify-between py-1">
        <BadgeCountSm count={count} />
        <Typography variant="h3" className="text-ink-bp">
          {ContextDisplay_Utils(title)}
        </Typography>
      </div>
    </div>
  );
};

export default DomCard;
