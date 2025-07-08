import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grammar Gone Wild",
  description:
    "Developed by GravSon: Mike Graves [Game Creator, Creative Partner & Co-Director], Mike Dawson [Contributor, Creative Partner & Co-Director]",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className={inter.className}>
          <Link href="/">Home</Link> |{" "}
          <Link href="/instructions">Game Rules & Instructions</Link> |{" "}
          <Link href="/settings">Settings</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
