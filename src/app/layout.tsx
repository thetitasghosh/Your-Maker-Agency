import type { Metadata } from "next";
import Header from "@/components/section/Header";
import { Inter } from "next/font/google";
import Scrolling from "@/libs/react-lenis-scroll";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YourMaker | A Digital Agency",
  description: "Created by Titas | Creative Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Scrolling>{children}</Scrolling>
      </body>
    </html>
  );
}
