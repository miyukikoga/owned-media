import { type ReactNode } from "react";
import Link from "next/link";
import styles from "./appLink.module.css";

type AppLinkProps = {
  tabIndex?: number;
  children?: ReactNode;
  href: string;
};

export const AppLink = ({ tabIndex = 0, children, ...props }: AppLinkProps) => {
  return (
    <Link className={styles.link} prefetch={false} {...props}>
      {children}
    </Link>
  );
};
