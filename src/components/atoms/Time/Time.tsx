import type { ComponentPropsWithoutRef } from "react";
import { type ReactNode } from "react";
import styles from "./time.module.css";

type Props = ComponentPropsWithoutRef<"time"> & {
  size?: "small" | "medium" | "large";
  children: ReactNode;
};

export const Time = ({ size = "medium", children, ...props }: Props) => {
  return (
    <time className={[styles.time, styles[size]].join(" ")} {...props}>
      {children}
    </time>
  );
};
