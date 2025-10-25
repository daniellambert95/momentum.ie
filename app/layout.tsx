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
  title: "Momentum | Content That Connects - Video & Photo Content Ireland",
  description: "Authentic, story-driven video and photo content for brands and local businesses across Ireland. From national retailers to independent shops, we help businesses capture what makes them unique.",
  keywords: ["video production Ireland", "content creation", "social media content", "photography Ireland", "brand storytelling", "County Wicklow", "digital marketing"],
  openGraph: {
    title: "Momentum | Content That Connects",
    description: "We create authentic, story-driven video and photo content for brands and local businesses across Ireland.",
    type: "website",
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
