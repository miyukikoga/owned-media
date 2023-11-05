import type { ComponentPropsWithoutRef } from "react";
import { type ReactNode } from "react";

type Props = ComponentPropsWithoutRef<"time"> & {
  size?: "small" | "medium" | "large";
  children: ReactNode;
};

export const Time = ({
  size = "medium",
  children,
  ...props
}: Props): JSX.Element => {
  const textSize = getSizeClassName(size);
  return (
    <time className={`font-body ${textSize}`} {...props}>
      {children}
    </time>
  );
};

const getSizeClassName = (size: string): string => {
  if (size === "small") return "text-xs";
  if (size === "large") return "text-2xl";
  return "text-base";
};
