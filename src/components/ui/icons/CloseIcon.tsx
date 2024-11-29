import Svg from "./Svg.tsx";
import { IconSvgProps } from "@interfaces/general.ts";

const CloseIcon = (props: IconSvgProps) => {
  return (
    <Svg {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.40605 12.5938C3.18179 12.3695 3.18179 12.006 3.40605 11.7817L11.7817 3.40605C12.006 3.18179 12.3695 3.18179 12.5938 3.40605C12.8181 3.6303 12.8181 3.99388 12.5938 4.21814L4.21814 12.5938C3.99388 12.8181 3.6303 12.8181 3.40605 12.5938Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.594 12.5938C12.8182 12.3695 12.8182 12.006 12.594 11.7817L4.21829 3.40605C3.99404 3.18179 3.63045 3.18179 3.4062 3.40605C3.18195 3.6303 3.18195 3.99388 3.4062 4.21814L11.7819 12.5938C12.0061 12.8181 12.3697 12.8181 12.594 12.5938Z"
      />
    </Svg>
  );
};

export default CloseIcon;
