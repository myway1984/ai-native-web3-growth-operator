import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI-Native Web3 Growth Operator",
  description: "专注 Web3、财经内容、用户增长与 AI 工作流的个人主页。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
