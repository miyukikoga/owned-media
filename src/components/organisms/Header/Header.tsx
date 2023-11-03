import { type ReactNode } from "react";
import { Logo } from "../../atoms/Logo";
import { HeaderMenu } from "../../molecules/HeaderMenu";
import styles from "./header.module.css";

type Props = {
  children: ReactNode;
};

export const Header = ({ children }: Props): JSX.Element => {
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
