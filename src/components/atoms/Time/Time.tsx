import React, { ReactNode } from "react";
import styles from "./time.module.scss";

type TimeProps = {
  size?: "small" | "medium" | "large";
  dateTime: Date;
  children: ReactNode;
};

export const Time = ({ size = "medium", dateTime, children }: TimeProps) => {
  return (
    <time
      className={[styles.time, styles[size]].join(" ")}
      dateTime={dateTime.toISOString()}
    >
      {children}
    </time>
  );
};
