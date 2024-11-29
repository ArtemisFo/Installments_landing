import { IconSvgProps } from "@interfaces/general.ts";
import Svg from "./Svg.tsx";

const ArrowRightIcon = (props: IconSvgProps) => {
  return (
    <Svg {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.6482 7.49492C10.9272 7.77387 10.9272 8.22613 10.6482 8.50507L6.3625 12.7908C6.08355 13.0697 5.63129 13.0697 5.35235 12.7908C5.0734 12.5118 5.0734 12.0596 5.35235 11.7806L9.13298 8L5.35235 4.21936C5.0734 3.94042 5.0734 3.48815 5.35235 3.20921C5.63129 2.93026 6.08355 2.93026 6.3625 3.20921L10.6482 7.49492Z"
      />
    </Svg>
  );
};

export default ArrowRightIcon;
