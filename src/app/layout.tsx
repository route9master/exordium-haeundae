import type { Metadata, Viewport } from "next";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "@fontsource/noto-serif-kr/500.css";
import "@fontsource/noto-serif-kr/600.css";
import "./globals.css";
import Analytics from "@/components/Analytics";
import { SITE } from "@/data/site";

const title = `${SITE.name} | 10년 전세형 민간임대 관심고객 등록`;
const description =
  "부산 해운대구 송정동 엑소디움 시그니처 해운대. 송정해수욕장 앞 지하 5층~지상 32층 324세대(59㎡·84㎡) 10년 전세형 민간임대 아파트. 관심고객 등록·상담 1666-4212.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title,
  description,
  keywords: ["엑소디움 시그니처 해운대", "엑소디움 시그니처 해운대 모델하우스", "엑소디움 시그니처 해운대 민간임대", "송정 민간임대", "해운대 민간임대"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE.url,
    siteName: SITE.name,
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0E1315",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
