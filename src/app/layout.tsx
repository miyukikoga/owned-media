import "./globals.css";
import type { Metadata } from "next";
import { headers } from "next/headers";
import {
  GoogleTagManager,
  GoogleTagManagerId,
} from "@/app/components/elements/GoogleTagManager";
import { googleTagManagerId } from "@/libs/gtm";
import { mediaName, description } from "@/features/constants/media";
import { Header } from "@/app/components/layouts/Header";
import { fetchCategories } from "@/features/categories/functions/categories";

class ExtractHostNameError extends Error {
  static {
    this.prototype.name = "ExtractHostNameError";
  }
}

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const host = headersList.get("host");
  if (!host) throw new ExtractHostNameError("Failed to get host");

  const categories = await fetchCategories(host);

  return (
    <html lang="ja">
      <head>
        <GoogleTagManager
          googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
        />
      </head>
      <body>
        <Header categories={categories}>{mediaName}</Header>
        {children}
      </body>
    </html>
  );
}
