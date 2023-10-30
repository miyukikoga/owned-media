import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { MyLink } from "../../atoms/Link";
import styles from "./headerMenu.module.css";

type HeaderMenuProps = {};

export const HeaderMenu = ({}: HeaderMenuProps) => {
  return (
    <div className={styles.menu}>
      <MyLink href="/profile">
        <BsPersonCircle color="grey" size="2em" />
      </MyLink>
    </div>
  );
};
