import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import JsonLd from "./json-ld";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://wavyfy.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Wavyfy - Web Design, SaaS Development & Brand Strategy",
    template: "%s | Wavyfy",
  },

  description:
    "Wavyfy is a web design and development agency. We build conversion-driven websites, Next.js SaaS platforms, and brand identities that attract, engage, and scale.",

  keywords: [
    "web design agency",
    "SaaS development",
    "Next.js development",
    "brand identity design",
    "UI/UX design",
    "conversion rate optimization",
    "landing page design",
    "React development",
    "Framer design",
    "digital product studio",
    "Wavyfy",
  ],

  authors: [{ name: "Wavyfy", url: SITE_URL }],

  category: "technology",

  icons: {
    icon: "/logo-icon.png",
    apple: "/logo-icon.png",
  },

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Wavyfy",
    title: "Wavyfy — Web Design, SaaS Development & Brand Strategy",
    description:
      "We build conversion-driven websites, Next.js SaaS platforms, and brand identities. Let's build something remarkable together.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wavyfy — Web Design, SaaS Development & Brand Strategy",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Wavyfy — Web Design, SaaS Development & Brand Strategy",
    description:
      "We build conversion-driven websites, Next.js SaaS platforms, and brand identities. Let's build something remarkable together.",
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
        <JsonLd />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
