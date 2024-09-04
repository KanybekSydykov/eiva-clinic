import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Theme";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Клиника Эйва",
  description: "Мы позаботимся о вашем здоровье",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body >
        <Providers>
          <Header />
          {children}
          <Suspense fallback={<div>Loading...</div>}>
          <Footer />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
