import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { site } from "@/data/site";
import { LanguageProvider } from "@/lib/language";
import { Sidebar } from "@/components/Sidebar";
import { NavbarMobile } from "@/components/NavbarMobile";
import { Footer } from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title.zh,
  description: site.description.zh,
  openGraph: {
    title: site.title.zh,
    description: site.description.zh,
    url: site.url,
    siteName: site.name.zh,
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: site.title.zh,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title.zh,
    description: site.description.zh,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#faf4f5",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-CN"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink">
        <div aria-hidden className="grain" />
        <LanguageProvider>
          <Sidebar />
          <NavbarMobile />
          <main className="min-h-screen lg:pl-[19rem]">
            {children}
            <Footer />
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
