"use client";

import  { useMemo, useState } from "react";
import movies from "@/app/data/movies.json";

import SearchBar from "@/components/SearchBar";
import FilterPanel from "@/components/FilterPanel";
import MovieList from "@/components/MovieList";

export interface Movie {
  id: string;
  slug: string;
  title: string;
  year: number;
  genre: string[];
  plot: string;
  poster: string;
  imdbRating: number | null;
  type: "movie" | "series";
  totalSeasons?: number;
  images: string[];
}

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<string>("All");
  const [selectedType, setSelectedType] = useState<"All" | "movie" | "series">("All");
  const [minRating, setMinRating] = useState<number | null>(0);
  const [sortOrder, setSortOrder] = useState<string>("default");

  // compute stats
  const stats = useMemo(() => {
    const all = movies as Movie[];
    const total = all.length;
    const moviesCount = all.filter((m) => m.type === "movie").length;
    const seriesCount = all.filter((m) => m.type === "series").length;

    const genreCounts: Record<string, number> = {};
    all.forEach((m) => {
      m.genre.forEach((g) => {
        genreCounts[g] = (genreCounts[g] || 0) + 1;
      });
    });
    const topGenres = Object.entries(genreCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map((g) => g[0]);

    return { total, moviesCount, seriesCount, topGenres };
  }, []);

  // unique genres
  const allGenres = useMemo(() => {
    const set = new Set<string>();
    (movies as Movie[]).forEach((m) => m.genre.forEach((g) => set.add(g)));
    return ["All", ...Array.from(set).sort()];
  }, []);

  // filtering logic
  const filteredMovies = useMemo(() => {
    let list = movies as Movie[];

    if (search.trim()) {
      list = list.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedGenre !== "All") {
      list = list.filter((movie) => movie.genre.includes(selectedGenre));
    }

    if (selectedType !== "All") {
      list = list.filter((movie) => movie.type === selectedType);
    }

    if (minRating && minRating > 0) {
      list = list.filter((movie) => (movie.imdbRating ?? 0) >= minRating);
    }

    switch (sortOrder) {
      case "year-asc":
        list = [...list].sort((a, b) => a.year - b.year);
        break;
      case "year-desc":
        list = [...list].sort((a, b) => b.year - a.year);
        break;
      case "rating-asc":
        list = [...list].sort((a, b) => (a.imdbRating ?? 0) - (b.imdbRating ?? 0));
        break;
      case "rating-desc":
        list = [...list].sort((a, b) => (b.imdbRating ?? 0) - (a.imdbRating ?? 0));
        break;
      default:
        break;
    }

    return list;
  }, [search, selectedGenre, selectedType, minRating, sortOrder]);

  

  return (
    <main className="max-w-7xl mx-auto px-6 py-10 bg-white dark:bg-gray-950 transition-colors">
      
      {/* HERO SECTION */}
      <section
        className="
          
          from-gray-200 via-gray-100 to-gray-200
          dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
          rounded-2xl p-8 md:p-12 mb-10 transition-colors
        "
      >
        <div className="md:flex md:items-center md:justify-between gap-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              Movies & Shows Directory
            </h1>

            <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg">
              A curated directory built from a cleaned movies & TV shows dataset.
              Browse films and series, filter by genre, rating, and type, and open detail pages for each entry.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <a
                href="#browse"
                className="
                  inline-flex items-center gap-2 px-4 py-2 rounded-lg
                  bg-blue-600 text-white text-sm font-medium hover:bg-blue-500
                  transition
                "
              >
                Browse Movies
              </a>

              <a
                href="https://gist.github.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4?utm_source=chatgpt.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-gray-700 dark:text-gray-300 underline"
              >
                Dataset source
              </a>
            </div>
          </div>

          {/* STATS */}
          <div className="mt-6 md:mt-0 flex gap-4">
            {[
              { label: "Total items", value: stats.total },
              { label: "Movies", value: stats.moviesCount },
              { label: "Series", value: stats.seriesCount },
            ].map((s, i) => (
              <div
                key={i}
                className="
                  bg-gray-300 dark:bg-gray-800
                  text-gray-800 dark:text-white
                  p-4 rounded-xl text-center min-w-[120px] transition-colors
                "
              >
                <div className="text-2xl font-semibold">{s.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* TOP GENRES */}
        <div className="mt-6">
          <div className="text-sm text-gray-700 dark:text-gray-300 mb-2">Top genres</div>
          <div className="flex flex-wrap gap-2">
            {stats.topGenres.map((g) => (
              <span
                key={g}
                className="
                  px-3 py-1 text-sm rounded-full 
                  bg-gray-300 dark:bg-gray-700
                  text-gray-800 dark:text-gray-200
                "
              >
                {g}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SEARCH + FILTERS */}
      <section id="browse" className="mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <SearchBar value={search} onChange={setSearch} />

              <FilterPanel
                genres={allGenres}
                selectedGenre={selectedGenre}
                onGenreChange={setSelectedGenre}
                selectedType={selectedType}
                onTypeChange={setSelectedType}
                minRating={minRating ?? 0}
                onRatingChange={(r) => setMinRating(r === 0 ? null : r)}
                sortOrder={sortOrder}
                onSortOrderChange={setSortOrder}
              />
            </div>
          </div>

          {/* RESULTS */}
          <div className="lg:col-span-3">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm text-gray-700 dark:text-gray-300">
                Showing{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  {filteredMovies.length}
                </span>{" "}
                results
              </div>

              <div className="text-xs text-gray-500 dark:text-gray-400">
                Tip: click a card to view details
              </div>
            </div>

            <MovieList movies={filteredMovies as Movie[]} />
          </div>
        </div>
      </section>

      {/* NO RESULTS */}
      {filteredMovies.length === 0 && (
        <div className="mt-10 text-center text-gray-600 dark:text-gray-400">
          No results found. Try changing filters or your search phrase.
        </div>
      )}
    </main>
  );
}
