import type { Metadata } from "next";
import "./globals.css";
import { mediaName, description } from "../constants/media";

export const metadata: Metadata = {
  title: mediaName,
  description: description,
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
