import { AppLink } from "@/app/components/elements/AppLink";
import { Text } from "@/app/components/elements/Text";

export default function NotFound() {
  return (
    <div className="text-center">
      <h2>Not Found</h2>
      <p>
        <Text>ページが見つかりません</Text>
      </p>
      <AppLink href="/" needUnderline={true}>
        Return Home
      </AppLink>
    </div>
  );
}
