import Svg from "./Svg.tsx";
import { IconSvgProps } from "@interfaces/general.ts";

const CalendarPlusIcon = (props: IconSvgProps) => {
  return (
    <Svg size={props?.size}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.6 2C5.93137 2 6.2 2.24421 6.2 2.54545V3.09091H9.8V2.54545C9.8 2.24421 10.0686 2 10.4 2C10.7314 2 11 2.24421 11 2.54545V3.0918C11.2853 3.09358 11.5346 3.09894 11.7511 3.11501C12.0884 3.14006 12.3984 3.19383 12.6896 3.32871C13.1412 3.53789 13.5083 3.87167 13.7384 4.2822C13.8868 4.54693 13.9459 4.82877 13.9735 5.13537C13.9904 5.32306 13.9965 5.5379 13.9987 5.78235C13.9996 5.7942 14 5.80614 14 5.81818C14 5.82759 13.9997 5.83693 13.9992 5.84622C14 5.96766 14 6.09616 14 6.23201V10.8589C14 11.298 14 11.6603 13.9735 11.9555C13.9459 12.2621 13.8868 12.544 13.7384 12.8087C13.5083 13.2192 13.1412 13.553 12.6896 13.7622C12.3984 13.8971 12.0884 13.9508 11.7511 13.9759C11.4264 14 11.0278 14 10.5448 14H5.45521C4.97223 14 4.57362 14 4.2489 13.9759C3.91165 13.9508 3.60162 13.8971 3.31042 13.7622C2.85883 13.553 2.49168 13.2192 2.26158 12.8087C2.11321 12.544 2.05407 12.2621 2.02652 11.9555C1.99999 11.6603 1.99999 11.298 2 10.8589V6.23202C2 6.09617 2 5.96766 2.00078 5.84622C2.00026 5.83693 2 5.82758 2 5.81818C2 5.80614 2.00043 5.7942 2.00127 5.78235C2.00351 5.5379 2.00965 5.32306 2.02652 5.13537C2.05407 4.82877 2.11321 4.54693 2.26158 4.2822C2.49168 3.87167 2.85883 3.53789 3.31042 3.32871C3.60162 3.19383 3.91165 3.14006 4.2489 3.11501C4.46539 3.09894 4.71472 3.09358 5 3.0918V2.54545C5 2.24421 5.26863 2 5.6 2ZM5 4.18278C4.73268 4.18449 4.52278 4.18922 4.34662 4.2023C4.08357 4.22184 3.94905 4.25725 3.85521 4.30072C3.62942 4.40531 3.44584 4.5722 3.33079 4.77747C3.28298 4.86277 3.24402 4.98507 3.22253 5.2242C3.22111 5.24007 3.21977 5.25624 3.21852 5.27273H12.7815C12.7802 5.25624 12.7789 5.24007 12.7775 5.2242C12.756 4.98507 12.717 4.86277 12.6692 4.77747C12.5542 4.5722 12.3706 4.40531 12.1448 4.30072C12.0509 4.25725 11.9164 4.22184 11.6534 4.2023C11.4772 4.18922 11.2673 4.18449 11 4.18278C10.9994 4.48358 10.731 4.72727 10.4 4.72727C10.0686 4.72727 9.8 4.48306 9.8 4.18182H6.2C6.2 4.48306 5.93137 4.72727 5.6 4.72727C5.26898 4.72727 5.00057 4.48358 5 4.18278ZM12.8 6.36364H3.2V10.8364C3.2 11.3036 3.20047 11.6212 3.22253 11.8667C3.24402 12.1058 3.28298 12.2281 3.33079 12.3134C3.44584 12.5187 3.62942 12.6856 3.85521 12.7902C3.94905 12.8337 4.08357 12.8691 4.34662 12.8886C4.61668 12.9087 4.96605 12.9091 5.48 12.9091H10.52C11.0339 12.9091 11.3833 12.9087 11.6534 12.8886C11.9164 12.8691 12.0509 12.8337 12.1448 12.7902C12.3706 12.6856 12.5542 12.5187 12.6692 12.3134C12.717 12.2281 12.756 12.1058 12.7775 11.8667C12.7995 11.6212 12.8 11.3036 12.8 10.8364V6.36364ZM8 7.45455C8.33137 7.45455 8.6 7.69875 8.6 8V9.09091H9.8C10.1314 9.09091 10.4 9.33512 10.4 9.63636C10.4 9.93761 10.1314 10.1818 9.8 10.1818H8.6V11.2727C8.6 11.574 8.33137 11.8182 8 11.8182C7.66863 11.8182 7.4 11.574 7.4 11.2727V10.1818H6.2C5.86863 10.1818 5.6 9.93761 5.6 9.63636C5.6 9.33512 5.86863 9.09091 6.2 9.09091H7.4V8C7.4 7.69875 7.66863 7.45455 8 7.45455Z"
      />
    </Svg>
  );
};

export default CalendarPlusIcon;
