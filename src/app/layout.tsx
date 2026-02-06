import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "(주)도화기술 구조설계 사무소",
  description: "창의적인 엔지니어링 - 구조설계, 내진설계, 비구조요소 내진설계 전문",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
