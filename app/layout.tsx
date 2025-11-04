import type { Metadata, Viewport } from "next";
import { Inter, Bebas_Neue, Lexend_Deca } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
  weight: ["400"],
});

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend-deca",
  display: "swap",
  weight: ["700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://momentum.ie'),
  title: {
    default: "Momentum | Content That Connects - Video & Photo Content Ireland",
    template: "%s | Momentum"
  },
  description: "Authentic, story-driven video and photo content for brands and local businesses across Ireland. From national retailers to independent shops, we help businesses capture what makes them unique.",
  keywords: ["video production Ireland", "content creation", "social media content", "photography Ireland", "brand storytelling", "County Wicklow", "digital marketing", "video marketing", "content agency Ireland", "social media marketing"],
  authors: [{ name: "Momentum" }],
  creator: "Momentum",
  publisher: "Momentum",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://momentum.ie",
    siteName: "Momentum",
    title: "Momentum | Content That Connects",
    description: "We create authentic, story-driven video and photo content for brands and local businesses across Ireland.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Momentum - Content Creation Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Momentum | Content That Connects",
    description: "We create authentic, story-driven video and photo content for brands and local businesses across Ireland.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://momentum.ie",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${bebasNeue.variable} ${lexendDeca.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
