import type { ReactNode } from "react";

type Props = {
  horizontal?: boolean;
  size?: "small" | "medium" | "large";
  childrenList: ReactNode[];
};

export const List = ({
  horizontal = false,
  size = "medium",
  childrenList,
}: Props): JSX.Element => {
  const fontSize = getSizeClassName(size);
  const sort = horizontal ? "inline-block mx-2" : "";
  return (
    <ul>
      {childrenList.map((children, i) => {
        return (
          <li className={`${fontSize} ${sort} list-none`} key={i}>
            <span>{children}</span>
          </li>
        );
      })}
    </ul>
  );
};

const getSizeClassName = (size: string): string => {
  if (size === "small") return "text-xs";
  if (size === "large") return "text-2xl";
  return "text-base";
};
