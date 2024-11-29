interface Props {
  width?: number;
  height?: number;
  className?: string;
  isFullRounded?: boolean;
  variant?: "text" | "rectangular";
}

const Skeleton = ({
  isFullRounded = false,
  variant = "rectangular",
  ...props
}: Props) => {
  const hasBgColor = props.className?.includes("bg-");
  return (
    <span
      className={
        "block animate-pulse" +
        (hasBgColor ? "" : " bg-neutral-98") +
        (isFullRounded ? " rounded-full" : " rounded-lg") +
        (variant === "text" ? " text-skeleton h-min" : "") +
        (props.className ? " " + props.className : "")
      }
      style={{ height: props.height, width: props.width }}
    />
  );
};

export default Skeleton;
