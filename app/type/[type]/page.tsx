// src/app/type/[type]/page.tsx

import movies from "@/app/data/movies.json";
import Link from "next/link";
import MovieList from "@/components/MovieList";

interface Movie {
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

// Generate static pages for: /type/movie and /type/series
export async function generateStaticParams() {
  return [
    { type: "movie" },
    { type: "series" }
  ];
}

export default async function TypePage({ params }: { params: { type: string } }) {
  const { type } = await params; // required fix for turbopack
  const normalizedType = type.toLowerCase(); // movie / series

  // Validate type
  if (normalizedType !== "movie" && normalizedType !== "series") {
    return (
      <div className="text-center py-20 text-gray-300">
        <h1 className="text-3xl font-semibold mb-4">Invalid Type</h1>
        <p className="mb-4">Type must be either <b>movie</b> or <b>series</b>.</p>
        <Link href="/" className="text-blue-400 underline hover:text-blue-300">
          ← Back to Home
        </Link>
      </div>
    );
  }

  // Filter dataset
  const filtered = (movies as Movie[]).filter((m) => m.type === normalizedType);

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <Link
        href="/"
        className="text-blue-400 underline hover:text-blue-300 transition"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold text-white mt-4 capitalize">
        {normalizedType === "movie" ? "Movies" : "TV Series"}
      </h1>

      <p className="text-gray-400 mt-2">
        Showing {filtered.length} {normalizedType === "movie" ? "movies" : "series"}.
      </p>

      <div className="mt-8">
        <MovieList movies={filtered} />
      </div>
    </main>
  );
}
