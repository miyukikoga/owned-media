import { AppLink } from "../components/atoms/AppLink";
import { Text } from "../components/atoms/Text";
import style from "./page.module.css";

export default function NotFound() {
  return (
    <div className={style.error}>
      <h2>Not Found</h2>
      <p>
        <Text>ページが見つかりません</Text>
      </p>
      <AppLink href="/">Return Home</AppLink>
    </div>
  );
}
