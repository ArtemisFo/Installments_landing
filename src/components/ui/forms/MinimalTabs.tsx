import React from "react";
import { MinimalTabColorType } from "@interfaces/general.ts";
import Typography from "@components/ui/forms/Typography.tsx";

interface Props {
  tabs: { label: string; index: number; icon?: React.ReactElement }[];
  value: number;
  className?: string;
  tabClasses?: string;
  tabActiveClasses?: string;
  color?: MinimalTabColorType;
  hasShadow?: boolean;
  onChangeTab: (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    v: { label: string; index: number },
  ) => void;
}

const getColorClasses = (color: MinimalTabColorType) => {
  switch (color) {
    case "secondary":
      return "shadow-secondary-100 border-secondary-100";
    case "info":
      return "shadow-info-100 border-info-100";
    case "success":
      return "shadow-success-100 border-success-100";
    case "warning":
      return "shadow-warning-100 border-warning-100";
    case "error":
      return "shadow-error-100 border-error-100";
    case "neutral":
      return "shadow-neutral-100 border-neutral-100";
    case "primary":
    default:
      return "shadow-primary-100 border-primary-100";
  }
};

const MinimalTabs = ({
  color = "primary",
  hasShadow = true,
  ...props
}: Props) => {
  return (
    <div
      className={
        "flex h-11 w-full items-center gap-3 overflow-auto rounded-xl border bg-white px-1 " +
        getColorClasses(color) +
        (hasShadow ? " shadow-md" : "") +
        (props.className ? " " + props.className : "")
      }
      role="tablist"
    >
      {props.tabs.map((tab, idx) => (
        <button
          key={idx}
          role="tab"
          onClick={(e) => {
            if (props.value !== tab.index) {
              props.onChangeTab(e, tab);
            }
          }}
          className={
            "flex h-9 items-center justify-center gap-1 rounded-xl" +
            (props.tabClasses ? " " + props.tabClasses : "") +
            (props.value === tab.index && props.tabActiveClasses
              ? " " + props.tabActiveClasses
              : "") +
            (props.value !== tab.index
              ? " text-ink-bs [&>svg]:text-ink-bs"
              : "")
          }
        >
          {tab.icon}
          <Typography variant={"c3"} weight={"bold"}>
            {tab.label}
          </Typography>
        </button>
      ))}
    </div>
  );
};

export default MinimalTabs;
