import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "IKS Capital",
    template: "%s | IKS Capital",
  },
  description: "Invest Keep Secure — корпоративный сайт IKS Capital",
  metadataBase: new URL("https://www.ikscapital.example"),
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "IKS Capital",
    description: "Invest Keep Secure — корпоративный сайт IKS Capital",
    url: "https://www.ikscapital.example",
    siteName: "IKS Capital",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="mx-auto w-[90%] md:w-[88%] lg:w-[85%] max-w-[1900px] px-4 sm:px-6 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
