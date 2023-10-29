import React, { ReactNode } from "react";
import styles from "./list.module.scss";

type ListProps = {
  horizontal?: boolean;
  size?: "small" | "medium" | "large";
  childrenList: ReactNode[];
};

export const List = ({
  horizontal = false,
  size = "medium",
  childrenList,
}: ListProps) => {
  const sort = horizontal ? styles.horizontal : "";
  return (
    <ul className={[styles.ul, styles[size]].join(" ")}>
      {childrenList.map((children, i) => {
        return (
          <li className={[styles.li, styles[size], sort].join(" ")} key={i}>
            <span> {children}</span>
          </li>
        );
      })}
    </ul>
  );
};