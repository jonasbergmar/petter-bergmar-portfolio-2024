import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Petter Bergmar Portfolio",
  description: "My personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className="h-svh overflow-hidden bg-black">{children}</body>
    </html>
  );
}
