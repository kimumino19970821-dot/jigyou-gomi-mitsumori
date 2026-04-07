import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "事業ごみ一括見積.com | 事業系一般廃棄物・産業廃棄物の収集業者マッチング",
  description: "店舗・施設・事業者向けの事業ごみ一括見積サイト。事業系一般廃棄物・産業廃棄物に全国対応。新規オープン準備中の業者選定もOK。300社超の許可業者から最安値を60秒で比較、平均30%のコスト削減実績。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJp.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-slate-200">{children}</body>
    </html>
  );
}
