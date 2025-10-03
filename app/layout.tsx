import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./ClientWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chidera's Portfolio",
  description: "Portfolio of Chidera Nwankwo - Mobile and Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
