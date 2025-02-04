import { IconSvgProps } from "@interfaces/general.ts";
import Svg from "./Svg.tsx";

const CheckIcon = (props: IconSvgProps) => {
  return (
    <Svg {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.00001 10.3905L11.7239 4.66667C11.9842 4.40632 12.4063 4.40632 12.6667 4.66667C12.927 4.92702 12.927 5.34913 12.6667 5.60948L6.47141 11.8047C6.34639 11.9298 6.17682 12 6.00001 12C5.8232 12 5.65363 11.9298 5.52861 11.8047L3.33334 9.60948C3.07299 9.34913 3.07299 8.92702 3.33334 8.66667C3.59369 8.40632 4.0158 8.40632 4.27615 8.66667L6.00001 10.3905Z"
      />
    </Svg>
  );
};

export default CheckIcon;
