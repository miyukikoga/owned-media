import type { ComponentPropsWithoutRef } from "react";
import { type ReactNode } from "react";
import Link from "next/link";
import styles from "./appLink.module.css";

type Props = ComponentPropsWithoutRef<typeof Link> & {
  children?: ReactNode;
};

export const AppLink = ({ children, ...props }: Props) => {
  return (
    <Link className={styles.link} prefetch={false} {...props}>
      {children}
    </Link>
  );
};
