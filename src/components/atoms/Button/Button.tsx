import type { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"button"> & {
  size?: "small" | "medium" | "large";
  label: string;
};

export const Button = ({
  size = "medium",
  label,
  ...props
}: Props): JSX.Element => {
  const buttonSize = getSizeClassName(size);
  return (
    <button
      type="button"
      className={`font-body font-bold cursor-pointer rounded bg-cyan-500 hover:bg-cyan-600 text-white border-0 ${buttonSize}`}
      {...props}
    >
      {label}
    </button>
  );
};

const getSizeClassName = (size: string): string => {
  if (size === "small") return "text-xs py-1 px-2";
  if (size === "large") return "text-2xl py-1 px-4";
  return "text-base py-1 px-3";
};
