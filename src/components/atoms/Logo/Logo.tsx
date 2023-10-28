import React, { ReactNode } from "react";
import styles from "./logo.module.scss";

type LogoProps = {
  size?: "small" | "medium" | "large";
  children: ReactNode;
};

export const Logo = ({ size = "medium", children }: LogoProps) => {
  return <p className={[styles.title, styles[size]].join(" ")}>{children}</p>;
};
