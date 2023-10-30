import { BsPersonCircle } from "react-icons/bs";
import { AppLink } from "../../atoms/AppLink";
import styles from "./HeaderMenu.module.css";

type HeaderMenuProps = {};

export const HeaderMenu = ({}: HeaderMenuProps) => {
  return (
    <div className={styles.menu}>
      <AppLink href="/profile">
        <BsPersonCircle color="grey" size="2em" />
      </AppLink>
    </div>
  );
};
