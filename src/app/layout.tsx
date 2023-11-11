export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <title>miyukikogaメディア</title>
        <meta property="og:title" content="miyukikogaメディア" key="title" />
      </head>
      <body>{children}</body>
    </html>
  );
}
