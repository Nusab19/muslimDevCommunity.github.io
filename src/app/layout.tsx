import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Muslim Developers Community - MDC",
  description: "A community for Muslim developers to connect, learn, and grow. Join us to learn, share, and grow together.",
  metadataBase: new URL("https://muslimdevcommunity.github.io/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.jepg" />
        <meta charSet="utf-8" />
        <meta
          httpEquiv="last-modified"
          content={new Date().toISOString().split(":")[0] + ":00:00.000Z"}
        />
      </head>
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}
