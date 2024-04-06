import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Hero from "@/components/Hero/Hero";
import Navigation from "@/components/Navigation/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Navigation/>
        <Hero
          title="Tradition seit über 50 Jahren"
          videoSrc="/video/hero/baeckerei-sinker.webm"
          heroImage="/img/hero/baecker-hero.jpg"
        />
        {children}
      </body>
    </html>
  );
}
