import { Roboto } from "next/font/google"
import "./globals.css";
import AppTitle from "../components/AppTitle";
import GoogleAnalytics from "../components/GoogleAnalytics";

const roboto = Roboto({ subsets: ["latin"], weight: ['400', '700'] });

export const metadata = {
  title: "Bazen",
  description: "Bazen, bazen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="grid grid-cols-12 text-sm lg:text-base">
      <GoogleAnalytics
        GA_TRACKING_ID={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ""}
      />
      <body className={`${roboto.className} lg:col-start-4 lg:col-end-10 col-start-1 col-end-13 my-10 p-2`}>
        <AppTitle />
        {children}
      </body>
    </html>
  );
}
