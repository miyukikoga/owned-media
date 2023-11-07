import {
  GoogleTagManager,
  GoogleTagManagerId,
} from "../components/atoms/GoogleTagManager";
import { googleTagManagerId } from "../features/gtm";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <GoogleTagManager
          googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
