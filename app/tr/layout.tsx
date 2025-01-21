"use client";
import Header from "@/components/layout/Header";
import "../globals.css";
import { Kanit } from "next/font/google";
import Footer from "@/components/layout/Footer";
import { useEffect } from "react";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { ThemeProvider } from "../themeContext";
import WebsiteMark from "@/components/WebsiteMark";
import MainContent from "@/components/layout/MainContent";
import { IRootLayout } from "@/util/types";

const kanit = Kanit({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }: IRootLayout) {
  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);
  return (
    <html lang="en">
      <GoogleAnalytics
        GA_TRACKING_ID={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ""}
      />
      <body className={kanit.className}>
        <ThemeProvider>
          <WebsiteMark />
          <Header />
          <MainContent children={children} />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
