import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import HeaderComponent from "@/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "List Jobs",
  description: "Search your job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <main className="sm:w-3/5 mx-auto">
            <HeaderComponent />
            <div className="p-2 bg-[#fafafa]">
              {children}
            </div>
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}
