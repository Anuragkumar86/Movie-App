// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Movies", href: "/type/movie" },
    { label: "Series", href: "/type/series" },
  ];

  return (
    <header className="
      sticky top-0 z-50
      bg-gray-100/80 dark:bg-gray-900/80 
      backdrop-blur 
      border-b border-gray-300 dark:border-gray-800
      transition-colors duration-300
    ">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-xl font-bold text-gray-900 dark:text-white tracking-wide transition-colors"
        >
          Movie3x
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href.replace("?type", ""));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  isActive
                    ? "text-gray-900 dark:text-white font-semibold"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
