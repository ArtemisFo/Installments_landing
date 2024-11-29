import { IconSvgProps } from "@interfaces/general.ts";
import Svg from "./Svg.tsx";

const ArrowLeftIcon = (props: IconSvgProps) => {
  return (
    <Svg {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.35179 8.50508C5.07284 8.22613 5.07284 7.77387 5.35179 7.49493L9.6375 3.20921C9.91645 2.93027 10.3687 2.93027 10.6477 3.20921C10.9266 3.48816 10.9266 3.94042 10.6477 4.21936L6.86702 8L10.6477 11.7806C10.9266 12.0596 10.9266 12.5118 10.6477 12.7908C10.3687 13.0697 9.91645 13.0697 9.6375 12.7908L5.35179 8.50508Z"
      />
    </Svg>
  );
};

export default ArrowLeftIcon;
