import type { ReactNode } from "react";
import { Size } from "../../../types/styles";
import { getTextSizeClassName } from "../../../features/styles";

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
          <li className={`${textSize} ${sort} m-2 list-none`} key={i}>
            <span>{children}</span>
          </li>
        );
      })}
    </ul>
  );
};
