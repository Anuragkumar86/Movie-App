// src/app/layout.tsx
import "@/app/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movies Directory",
  description: "A movie & series directory built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
          <Navbar />
          <main className="min-h-screen transition-colors duration-300">
            {children}
          </main>
          <Footer />
      </body>
    </html>
  );
}
