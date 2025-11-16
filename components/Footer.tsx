// src/components/Footer.tsx

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="
      mt-16 
      border-t border-gray-300 dark:border-gray-800
      bg-gray-100/60 dark:bg-gray-900/50 
      backdrop-blur 
      transition-colors duration-300
    ">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-6">

          {/* Left Section */}
          <div>
            <p className="text-sm text-gray-700 dark:text-gray-400 mt-1 max-w-sm">
              A directory of movies & series built for the internship
              assessment using Next.js, Tailwind, and ISR.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2 text-sm">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Home
            </Link>

            <Link
              href="https://github.com/"
              target="_blank"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              GitHub Repo
            </Link>

            <Link
              href="https://www.imdb.com/"
              target="_blank"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Dataset Source (IMDb)
            </Link>
          </div>

          {/* Attribution */}
          <div className="text-sm">
            <p className="leading-relaxed text-gray-700 dark:text-gray-400">
              Built by <span className="text-gray-900 dark:text-gray-200 font-medium">Anurag</span>  
              using Next.js 14, Tailwind, and Vercel.
            </p>

            <p className="mt-2 text-gray-600 dark:text-gray-500">
              © {year} — All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
