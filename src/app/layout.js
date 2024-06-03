import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="hydrated">
      <body className={inter.className}>
        <h1 className="text-center pt-4 pb-2 text-2xl">
          <Link href="/">Home</Link>
        </h1>
        {children}
      </body>
    </html>
  );
}
