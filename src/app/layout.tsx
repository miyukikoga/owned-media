import type { Metadata } from "next";
import { mediaName, description } from "@/constants/media";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: {
    template: `%s | ${mediaName}`,
    default: mediaName,
  },
  description: description,
  applicationName: mediaName,
  authors: [{ name: "Miyuki" }],
  openGraph: {
    title: mediaName,
    description: description,
    url: "https://www.miyukikoga.media",
    siteName: mediaName,
    images: [
      {
        url: "https://www.miyukikoga.media/profile.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
