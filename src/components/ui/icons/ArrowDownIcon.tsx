import { IconSvgProps } from "@interfaces/general.ts";
import Svg from "./Svg.tsx";

const ArrowDownIcon = (props: IconSvgProps) => {
  return (
    <Svg {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.50508 10.6482C8.22613 10.9272 7.77387 10.9272 7.49493 10.6482L3.20921 6.3625C2.93027 6.08355 2.93027 5.63129 3.20921 5.35235C3.48816 5.0734 3.94042 5.0734 4.21936 5.35235L8 9.13298L11.7806 5.35235C12.0596 5.0734 12.5118 5.0734 12.7908 5.35235C13.0697 5.63129 13.0697 6.08355 12.7908 6.3625L8.50508 10.6482Z"
      />
    </Svg>
  );
};

export default ArrowDownIcon;
