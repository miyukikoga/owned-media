import { AppLink } from "@/components/atoms/AppLink";
import { Text } from "@/components/atoms/Text";

export default function NotFound() {
  return (
    <div className="text-center">
      <h2>Not Found</h2>
      <p>
        <Text>ページが見つかりません</Text>
      </p>
      <AppLink href="/">Return Home</AppLink>
    </div>
  );
}
