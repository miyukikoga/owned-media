import { type ReactNode } from "react";
import { Size } from "../../../types/styles";

type Props = {
  size?: Size;
  children: ReactNode;
};

export const Logo = ({ size = "medium", children }: Props): JSX.Element => {
  const textSize = getTextSizeClassName(size);
  return (
    <p
      className={`cursor-pointer bg-cyan-500 font-bold text-white rounded inline-block p-3 ${textSize}`}
    >
      {children}
    </p>
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
