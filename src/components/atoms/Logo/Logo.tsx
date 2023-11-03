import { type ReactNode } from "react";
import styles from "./logo.module.css";

type Props = {
  size?: "small" | "medium" | "large";
  children: ReactNode;
};

export const Logo = ({ size = "medium", children }: Props): JSX.Element => {
  return <p className={[styles.title, styles[size]].join(" ")}>{children}</p>;
};
