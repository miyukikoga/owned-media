import type { ReactNode } from "react";
import { Size } from "@/types/styles";

type Props = {
  horizontal?: boolean;
  size?: Size;
  childrenList: ReactNode[];
};

export const List = ({
  horizontal = false,
  size = "medium",
  childrenList,
}: Props): JSX.Element => {
  const textSize = getTextSizeClassName(size);
  const sort = horizontal ? "inline-block mx-2" : "";
  return (
    <ul>
      {childrenList.map((children, i) => {
        return (
          <li className={`${textSize} ${sort} list-none`} key={i}>
            <span>{children}</span>
          </li>
        );
      })}
    </ul>
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
