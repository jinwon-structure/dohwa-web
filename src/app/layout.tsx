import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dohwa.pro"),
  title: {
    default: "(주)도화기술 구조설계 사무소",
    template: "%s | (주)도화기술",
  },
  description:
    "창의적인 엔지니어링 - 구조설계, 내진설계, 비구조요소 내진설계 전문. 서울 강남구 소재 구조설계 전문 엔지니어링 회사.",
  keywords: [
    "구조설계",
    "내진설계",
    "비구조요소 내진설계",
    "도화기술",
    "구조 엔지니어링",
    "리모델링 구조설계",
    "성능기반설계",
    "KDS 41 17 00",
    "PC구조설계",
    "VE검토",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.dohwa.pro",
    siteName: "(주)도화기술",
    title: "(주)도화기술 구조설계 사무소",
    description:
      "창의적인 엔지니어링 - 구조설계, 내진설계, 비구조요소 내진설계 전문",
  },
  verification: {
    google: "google562fc884922db82e",
    other: { "naver-site-verification": ["fe1f3b16fb7859876c7e22e0c8001aa827a5b0bc"] },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
