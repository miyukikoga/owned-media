import type { Metadata } from "next";
import "./globals.css";
import {
  GoogleTagManager,
  GoogleTagManagerId,
} from "../components/atoms/GoogleTagManager";
import { googleTagManagerId } from "../features/gtm";
import { mediaName, description } from "../constants/media";
import { Header } from "@/components/organisms/Header";

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
      <head>
        <GoogleTagManager
          googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
        />
      </head>
      <body>
        <Header>{mediaName}</Header>
        {children}
      </body>
    </html>
  );
}
