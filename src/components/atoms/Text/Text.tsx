import React, { ReactNode } from "react";
import styles from "./text.module.scss";

type TextProps = {
  size?: "small" | "medium" | "large";
  children: ReactNode;
};

export const Text = ({ size = "medium", children }: TextProps) => {
  return (
    <span className={[styles.text, styles[size]].join(" ")}>{children}</span>
  );
};
