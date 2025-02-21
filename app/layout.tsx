import type { Metadata } from "next";
import { Protest_Revolution } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const protest = Protest_Revolution({
  variable: "--title-font",
  subsets: ["latin"],
  weight: "400",
});

const papyrus = localFont({
  src: "../fonts/PapyrusRegular.ttf",
  variable: "--text-font",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Yamako - terapie dźwiękiem",
  description: "Created by Cezary Makowski",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${protest.variable} ${papyrus.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
