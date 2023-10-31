import { type ReactNode } from "react";
import styles from "./text.module.css";

type Props = {
  size?: "small" | "medium" | "large";
  children: ReactNode;
};

export const Text = ({ size = "medium", children }: Props) => {
  return (
    <span className={[styles.text, styles[size]].join(" ")}>{children}</span>
  );
};
