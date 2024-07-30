import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({ subsets: ["latin"], weight: ['400', '700'] });

export const metadata = {
  title: "Bazen",
  description: "Bazen, bazen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={kanit.className}>{children}</body>
    </html>
  );
}
