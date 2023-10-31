import type { ComponentPropsWithoutRef } from "react";
import { type ReactNode } from "react";
import Link from "next/link";
import styles from "./appLink.module.css";

type AppLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  children?: ReactNode;
};

export const AppLink = ({ children, ...props }: AppLinkProps) => {
  return (
    <Link className={styles.link} prefetch={false} {...props}>
      {children}
    </Link>
  );
};
