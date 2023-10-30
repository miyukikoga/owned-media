import React, { ReactNode } from "react";
import { Logo } from "../../atoms/Logo";
import { HeaderMenu } from "../../molecules/HeaderMenu";
import styles from "./header.module.css";

type HeaderProps = {
  children: ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return (
    <div className={styles.header}>
      <div>
        <Logo>{children}</Logo>
      </div>
      <div className={styles.menu}>
        <HeaderMenu />
      </div>
    </div>
  );
};
