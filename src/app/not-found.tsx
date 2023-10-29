"use client";

import Router from "next/router";
import { Button } from "../components/atoms/Button";
import { Text } from "../components/atoms/Text";
import style from "./page.module.scss";

export default function NotFound() {
  return (
    <div className={style.error}>
      <h2>Not Found</h2>
      <p>
        <Text>ページが見つかりません</Text>
      </p>
      <Button onClick={() => Router.push("/")} label="Return Home" />
    </div>
  );
}
