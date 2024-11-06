import type { ComponentPropsWithoutRef } from "react";
import { type ReactNode } from "react";
import { Size } from "@/features/types/styles";

type Props = ComponentPropsWithoutRef<"time"> & {
  size?: Size;
  children: ReactNode;
};

export const Time = ({ size = "medium", children, ...props }: Props) => {
  const textSize = getTextSizeClassName(size);
  return (
    <time className={`${textSize}`} {...props}>
      {children}
    </time>
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
