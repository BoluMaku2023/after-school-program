import { Inter } from "next/font/google";
import "../globals.css";
import localFont from "next/font/local";
import mabry from "@/assets";

const inter = Inter({ subsets: ["latin"] });

const myFont = localFont({
  src: "../mabry_pro.woff2",
  display: "swap",
  variable: "--font-mabry",
});

export const metadata = {
  title: "ASP | Parent",
  description: "After School Program Parent's dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${myFont.variable}`}>{children}</body>
    </html>
  );
}
