import { Typography } from "@repo/ui";
import { useTranslations } from "next-intl";
import { NO_RESULT_NEXT_IMAGE } from "@constants/env.ts";
import NextImage from "@components/ui/gadgets/NextImage.tsx";

interface Props {
  label?: string;
  className?: string;
}

function NotResults({
  label = "noResults",
  className = "rounded-xl bg-surface-6",
}: Props) {
  const t = useTranslations("webSiteConstant");

  return (
    <div
      className={
        "flex w-full flex-grow flex-col items-center justify-center gap-8 " +
        className
      }
    >
      <NextImage
        width={80}
        height={80}
        src={NO_RESULT_NEXT_IMAGE}
        alt="not results img"
      />
      <Typography variant="c3" className="text-ink-bs">
        {t(`sentences.${label}`)}
      </Typography>
    </div>
  );
}

export default NotResults;
