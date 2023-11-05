import { type ReactNode } from "react";

type Props = {
  size?: "small" | "medium" | "large";
  children: ReactNode;
};

export const Logo = ({ size = "medium", children }: Props): JSX.Element => {
  const logoSize = getSizeClassName(size);
  return (
    <p
      className={`font-body cursor-pointer bg-cyan-500 hover:bg-cyan-600 font-bold text-white rounded inline-block p-3 ${logoSize}`}
    >
      {children}
    </p>
  );
};

const getSizeClassName = (size: string): string => {
  if (size === "small") return "text-xs";
  if (size === "large") return "text-2xl";
  return "text-base";
};
