// src/components/FilterPanel.tsx
"use client";

import React from "react";

interface FilterPanelProps {
  genres: string[];
  selectedGenre: string;
  onGenreChange: (genre: string) => void;

  selectedType: "All" | "movie" | "series";
  onTypeChange: (type: "All" | "movie" | "series") => void;

  minRating: number;
  onRatingChange: (rating: number) => void;

  sortOrder: string;
  onSortOrderChange: (value: string) => void;
}

export default function FilterPanel({
  genres,
  selectedGenre,
  onGenreChange,
  selectedType,
  onTypeChange,
  minRating,
  onRatingChange,
  sortOrder,
  onSortOrderChange,
}: FilterPanelProps) {
  return (
    <div className="w-full bg-gray-900 p-4 rounded-xl border border-gray-800">
      <div className="space-y-6">

        {/* Genre Filter */}
        <div>
          <label
            htmlFor="genre-select"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Genre
          </label>

          <select
            id="genre-select"
            value={selectedGenre}
            onChange={(e) => onGenreChange(e.target.value)}
            className="
              w-full rounded-lg bg-gray-800 border border-gray-700 
              text-gray-100 px-3 py-2
              focus:outline-none focus:ring-2 focus:ring-blue-500
            "
          >
            <option value="All">All Genres</option>

            {genres.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>

        {/* Type Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Type
          </label>

          <div className="flex gap-2">
            {["All", "movie", "series"].map((t) => (
              <button
                key={t}
                onClick={() => onTypeChange(t as "All" | "movie" | "series")}
                className={`px-3 py-2 rounded-lg text-sm transition 
                  ${
                    selectedType === t
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
              >
                {t === "All" ? "All" : t === "movie" ? "Movies" : "Series"}
              </button>
            ))}
          </div>
        </div>

        {/* Minimum Rating Filter */}
        <div>
          <label
            htmlFor="rating-range"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Minimum Rating: {minRating}
          </label>

          <input
            id="rating-range"
            type="range"
            min={0}
            max={10}
            step={0.5}
            value={minRating}
            onChange={(e) => onRatingChange(Number(e.target.value))}
            className="w-full accent-blue-500 cursor-pointer"
          />
        </div>

        {/* Sorting Filter */}
        <div>
          <label
            htmlFor="sort-select"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Sort By
          </label>

          <select
            id="sort-select"
            value={sortOrder}
            onChange={(e) => onSortOrderChange(e.target.value)}
            className="
              w-full rounded-lg bg-gray-800 border border-gray-700 
              text-gray-100 px-3 py-2
              focus:outline-none focus:ring-2 focus:ring-blue-500
            "
          >
            <option value="default">Default</option>
            <option value="year-asc">Year (Oldest First)</option>
            <option value="year-desc">Year (Newest First)</option>
            <option value="rating-asc">Rating (Low to High)</option>
            <option value="rating-desc">Rating (High to Low)</option>
          </select>
        </div>

      </div>
    </div>
  );
}
