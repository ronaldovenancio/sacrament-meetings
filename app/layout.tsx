import { Suspense } from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NavLinks from "@/components/NavLinks";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sacrament Meeting Planner",
  description: "Plan and review sacrament meeting agendas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-slate-50 text-slate-900`}>
        <div className="flex min-h-screen flex-col">
          <Header />

          <div className="border-b bg-white px-6 py-3 print:hidden">
            <div className="mx-auto max-w-5xl">
              <Suspense
                fallback={
                  <nav aria-label="Main navigation">
                    <p className="text-sm text-slate-500">Loading navigation...</p>
                  </nav>
                }
              >
                <NavLinks />
            </Suspense>
            </div>
          </div>

          <main className="flex-1">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}