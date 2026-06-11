import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Penjy - Software Engineer & DevOps Builder",
  description: "Portfolio of Penjy, a senior software engineer and DevOps-focused builder. Featured projects, technical insights, and case studies.",
  openGraph: {
    title: "Penjy - Software Engineer & DevOps Builder",
    description: "Premium portfolio showcasing engineering excellence and technical leadership",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className="bg-background"
      style={{
        [spaceGrotesk.variable]: spaceGrotesk.style.fontFamily,
        [inter.variable]: inter.style.fontFamily,
        [jetbrainsMono.variable]: jetbrainsMono.style.fontFamily,
      } as React.CSSProperties}
    >
      <body className="font-body text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
