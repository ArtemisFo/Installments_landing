import { Children } from "@interfaces/general.ts";
import WordBadgeSm from "@components/ui/smallCards/WordBadgeSm.tsx";

interface Props {
  ti?: string;
  action?: Children;
}

const TitleCard = (props: Props) => {
  return (
    <div className="flex items-center justify-between p-2 border-b border-ink-bd">
      <WordBadgeSm txt={props.ti} />
      {props?.action && props?.action}
    </div>
  );
};

export default TitleCard;
