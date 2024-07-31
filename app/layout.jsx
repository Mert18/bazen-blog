import { Kanit } from "next/font/google";
import "./globals.css";
import AppTitle from "../components/AppTitle";

const kanit = Kanit({ subsets: ["latin"], weight: ['400', '700'] });

export const metadata = {
  title: "Bazen",
  description: "Bazen, bazen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="grid grid-cols-6">
      <body className={`${kanit.className} col-start-2 col-end-5 my-10`}>
        <AppTitle />
        {children}
      </body>
    </html>
  );
}
