import React, { ReactNode } from "react";
import Link from "next/link";
import styles from "./link.module.css";

type LinkProps = {
  tabIndex?: number;
  children?: ReactNode;
  href: string;
};

export const MyLink = ({ tabIndex = 0, children, ...props }: LinkProps) => {
  return (
    <Link className={styles.link} {...props}>
      {children}
    </Link>
  );
};
