import { type ReactNode } from "react";
import { Size, Weight } from "@/types/styles";

type Props = {
  size?: Size;
  weight?: Weight;
  children: ReactNode;
};

export const Text = ({
  size = "medium",
  weight = "medium",
  children,
}: Props) => {
  const textSize = getTextSizeClassName(size);
  const textWeight = getTextWeightClassName(weight);
  return <span className={`${textSize} ${textWeight}`}>{children}</span>;
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

/**
 * 文字の太さのクラス名を取得する
 * @param weight 太さ
 * @returns クラス名
 */
export const getTextWeightClassName = (weight: Weight): string => {
  if (weight === "thin") return "font-thin";
  if (weight === "bold") return "font-bold";
  return "font-medium";
};
