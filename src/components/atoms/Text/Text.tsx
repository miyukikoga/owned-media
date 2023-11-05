import { type ReactNode } from "react";

type Props = {
  size?: "small" | "medium" | "large";
  children: ReactNode;
};

export const Text = ({ size = "medium", children }: Props): JSX.Element => {
  const textSize = getSizeClassName(size);
  return <span className={`font-body ${textSize}`}>{children}</span>;
};

const getSizeClassName = (size: string): string => {
  if (size === "small") return "text-xs";
  if (size === "large") return "text-2xl";
  return "text-base";
};
