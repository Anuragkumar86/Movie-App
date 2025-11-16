// src/components/SearchBar.tsx
"use client";

import React from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

/**
 * SearchBar
 * A simple controlled input for searching movie titles.
 * - Accessible label
 * - Clean UI
 * - Proper focus ring
 * - Debouncing intentionally NOT added to avoid complexity for assignment
 */
export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="w-full">
      <label htmlFor="search" className="sr-only">
        Search movies or series
      </label>

      <input
        id="search"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by title..."
        className="
          w-full rounded-xl bg-gray-800 text-gray-100 px-4 py-3 
          placeholder:text-gray-400
          border border-gray-700 
          focus:outline-none focus:ring-2 focus:ring-blue-500
          transition
        "
      />
    </div>
  );
}
