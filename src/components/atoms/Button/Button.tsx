import type { ComponentPropsWithoutRef } from "react";
import { Size } from "@/types/styles";

type Props = ComponentPropsWithoutRef<"button"> & {
  size?: Size;
  label: string;
};

export const Button = ({ size = "medium", label, ...props }: Props) => {
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

/**
 * 文字サイズのクラス名を取得する
 * @param size サイズ
 * @returns クラス名
 */
const getTextSizeClassName = (size: Size): string => {
  if (size === "small") return "text-xs";
  if (size === "large") return "text-2xl";
  return "text-base";
};
