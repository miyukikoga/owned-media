import { BsPersonCircle } from "react-icons/bs";
import { AppLink } from "../../atoms/AppLink";
import styles from "./headerMenu.module.css";

type Props = {};

export const HeaderMenu = ({}: Props) => {
  return (
    <div className={styles.menu}>
      <AppLink href="/profile">
        <BsPersonCircle color="grey" size="2em" />
      </AppLink>
    </div>
  );
};
