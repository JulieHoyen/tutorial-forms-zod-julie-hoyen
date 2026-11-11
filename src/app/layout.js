import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "800"],
});

export const metadata = {
  title: "Recipe Form",
  description: "Opret dine egne opskrifter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da" className={`${barlow.variable} ${barlowCondensed.variable} antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
