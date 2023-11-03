"use client";

import { useEffect } from "react";
import { Button } from "../components/atoms/Button";
import style from "./page.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={style.error}>
      <h2>Something went wrong!</h2>
      <Button onClick={() => reset()} label="Try again" />
    </div>
  );
}
