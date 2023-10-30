import React from "react";
import styles from "./button.module.css";

type ButtonProps = {
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
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
