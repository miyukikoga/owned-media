import type { ComponentPropsWithoutRef } from "react";
import styles from "./button.module.css";

type Props = ComponentPropsWithoutRef<"button"> & {
  size?: "small" | "medium" | "large";
  label: string;
};

export const Button = ({
  size = "medium",
  label,
  ...props
}: Props): JSX.Element => {
  return (
    <button
      type="button"
      className={[styles.button, styles[size]].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};
