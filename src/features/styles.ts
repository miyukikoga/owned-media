import { Size } from "../types/styles";

/**
 * 文字サイズのクラス名を取得する
 * @param size サイズ
 * @returns クラス名
 */
export const getTextSizeClassName = (size: Size): string => {
  if (size === "small") return "text-xs";
  if (size === "large") return "text-2xl";
  return "text-base";
};
