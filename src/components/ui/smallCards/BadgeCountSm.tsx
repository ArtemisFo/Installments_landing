import { PlusIcon } from "@repo/icon";
import { Typography } from "@repo/ui";

interface Props {
  count?: number | string;
}

function BadgeCountSm(props: Props) {
  return (
    <div className="rounded-xl bg-primary-onMain gap-1 text-primary-main px-2 py-1 text-center w-fit flex items-center">
      <Typography variant="t1" weight="bold">
        {props.count ?? 0}
      </Typography>
      <PlusIcon />
    </div>
  );
}

export default BadgeCountSm;
