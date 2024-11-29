import NextImage from "@components/ui/gadgets/NextImage.tsx";
import { INSTAGRAM_TINY_NEXT_IMAGE } from "@constants/env.ts";

function SocialSm() {
  return (
    <div className="rounded-xl bg-primary-onMain p-2 text-primary-main cursor-pointer transition-colors ease-linear hover:bg-primary-main hover:text-primary-onMain">
      <NextImage
        src={INSTAGRAM_TINY_NEXT_IMAGE}
        alt="instagram logo"
        width={24}
        height={24}
      />
    </div>
  );
}

export default SocialSm;
