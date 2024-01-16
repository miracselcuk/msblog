import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "msblog",
  description: "MSBLOGMSBLOGMSBLOG",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main
          className="flex 
          min-h-screen
         text-text 
          sm:w-8/12
          w-full 
          mx-auto 
          p-4"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
