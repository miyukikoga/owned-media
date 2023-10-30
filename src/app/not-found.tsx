import { MyLink } from "../components/atoms/Link";
import { Text } from "../components/atoms/Text";
import style from "./page.module.css";

export default function NotFound() {
  return (
    <div className={style.error}>
      <h2>Not Found</h2>
      <p>
        <Text>ページが見つかりません</Text>
      </p>
      <MyLink href="/">Return Home</MyLink>
    </div>
  );
}
