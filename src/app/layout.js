import Navbar from "./components/layout/Navbar";
import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Rouge | Minimalist Landing Page for Creative Agencies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Navbar />
        <main className="max-w-[100rem] mx-auto px-2">{children}</main>
      </body>
    </html>
  );
}
