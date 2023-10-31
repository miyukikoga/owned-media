import type { ComponentPropsWithoutRef } from "react";
import styles from "./button.module.css";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  size?: "small" | "medium" | "large";
  label: string;
};

export const Button = ({ size = "medium", label, ...props }: ButtonProps) => {
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
