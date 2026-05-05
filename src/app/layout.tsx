import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import SmoothScroll from "@/components/SmoothScroll";
import JsonLd from "./json-ld";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.wavyfy.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  applicationName: "Wavyfy",
  referrer: "origin-when-cross-origin",

  title: {
    default: "Wavyfy - SaaS Development, Shopify & Web Apps for Startups",
    template: "%s | Wavyfy",
  },

  description:
    "Wavyfy builds SaaS apps, Shopify stores, and custom websites for startups. End-to-end design, development, and deployment—fast and scalable.",
  keywords: [
    "saas development agency",
    "saas app development for startups",
    "startup web development agency",
    "shopify development for startups",
    "custom web app development",
    "next js saas development",
    "web development agency for startups",
    "build saas product",
    "startup website development",
    "wavyfy",
  ],

  authors: [{ name: "Wavyfy", url: SITE_URL }],

  category: "technology",

  icons: {
    icon: "/logo-icon.png",
    apple: "/logo-icon.png",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Wavyfy",
    title: "Wavyfy - SaaS Development, Shopify & Web Apps for Startups",
    description:
      "Wavyfy builds SaaS apps, Shopify stores, and custom websites for startups. End-to-end design, development, and deployment—fast and scalable.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wavyfy - SaaS, Shopify & Web Development",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Wavyfy - SaaS Development, Shopify & Web Apps for Startups",
    description:
      "We build SaaS applications, Shopify stores, and custom websites for startups. End-to-end and scalable.",
    images: ["/og-image.png"],
    creator: "@wavyfy",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
    <html
      lang="en"
      className={`${inter.variable} antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen" suppressHydrationWarning>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
        <JsonLd />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
