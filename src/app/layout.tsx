import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TabBar from "@/components/TabBar";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `${site.choirName} | ${site.churchName}`,
  description: site.description,
  openGraph: {
    title: `${site.choirName} | ${site.churchName}`,
    description: site.description,
    url: site.churchUrl,
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${site.choirName} | ${site.churchName}`,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased flex min-h-screen flex-col pb-16 sm:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <TabBar />
      </body>
    </html>
  );
}
