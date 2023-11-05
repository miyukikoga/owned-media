import type { ComponentPropsWithoutRef } from "react";
import { Size } from "../../../types/styles";
import { getTextSizeClassName } from "../../../features/styles";

type Props = ComponentPropsWithoutRef<"button"> & {
  size?: Size;
  label: string;
};

export const Button = ({
  size = "medium",
  label,
  ...props
}: Props): JSX.Element => {
  const textSize = getTextSizeClassName(size);
  return (
    <button
      type="button"
      className={`font-body font-bold cursor-pointer rounded bg-cyan-500 hover:bg-cyan-600 text-white border-0 py-1 px-4 ${textSize}`}
      {...props}
    >
      {label}
    </button>
  );
};
