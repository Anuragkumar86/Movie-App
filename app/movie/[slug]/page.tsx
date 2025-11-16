// src/app/movie/[slug]/page.tsx

import Image from "next/image";
import Link from "next/link";
import movies from "@/app/data/movies.json";

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

export async function generateStaticParams() {
  return (movies as Movie[]).map((m) => ({ slug: m.slug }));
}

export default async function MovieDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const movie = (movies as Movie[]).find((m) => m.slug === slug);

  if (!movie) {
    return (
      <div className="text-center py-20 text-gray-300">
        <h1 className="text-3xl font-semibold mb-4">Movie not found</h1>
        <Link
          href="/"
          className="text-blue-400 underline hover:text-blue-300 transition"
        >
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-20">

      {/* BACK BUTTON */}
      <div className="max-w-6xl mx-auto px-6 pt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition text-sm"
        >
          ← Back to Home
        </Link>
      </div>

      {/* HERO SECTION */}
      <div className="relative w-full h-[380px] md:h-[450px] mt-6">
        <Image
          src={movie.poster}
          alt={movie.title}
          fill
          unoptimized
          className="object-cover opacity-40"
        />

        {/* BLACK GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20to-black"></div>

        {/* TITLE OVERLAY */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {movie.title}
          </h1>
          <p className="text-gray-300 text-lg mt-1">({movie.year})</p>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="max-w-6xl mx-auto px-6 mt-10 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10">

        {/* POSTER FLOATING CARD */}
        <div className="relative">
          <Image
            src={movie.poster}
            alt={movie.title}
            width={260}
            height={360}
            unoptimized
            className="
              rounded-xl shadow-2xl border border-gray-800 
              object-cover
            "
          />

          {/* INFO BADGES */}
          <div className="mt-4 space-y-3">
            {/* IMDB RATING */}
            <div className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/40 rounded-lg text-yellow-300 text-sm font-medium">
              ⭐ IMDb: {movie.imdbRating ?? "N/A"}
            </div>

            {/* TYPE */}
            <div className="px-3 py-1 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-300 text-sm font-medium">
              {movie.type.toUpperCase()}
            </div>

            {/* SEASONS */}
            {movie.type === "series" && movie.totalSeasons && (
              <div className="px-3 py-1 rounded-lg bg-purple-600/20 border border-purple-500/40 text-purple-300 text-sm font-medium">
                {movie.totalSeasons} Seasons
              </div>
            )}
          </div>
        </div>

        {/* DETAILS */}
        <div>
          {/* GENRES */}
          <div className="flex flex-wrap gap-2 mb-6">
            {movie.genre.map((g) => (
              <span
                key={g}
                className="px-3 py-1 rounded-full bg-gray-800/80 border border-gray-700 text-gray-300 text-sm"
              >
                {g}
              </span>
            ))}
          </div>

          {/* PLOT */}
          <h2 className="text-2xl font-semibold text-white">Overview</h2>
          <p className="mt-3 text-gray-300 leading-relaxed text-lg">
            {movie.plot}
          </p>
        </div>

      </div>

      {/* IMAGE GALLERY */}
      {movie.images && movie.images.length > 0 && (
        <div className="max-w-6xl mx-auto px-6 mt-14">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Image Gallery
          </h2>

          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
            {movie.images.map((img, idx) => (
              <div
                key={idx}
                className="relative w-90 h-80 flex-shrink-0 rounded-xl overflow-hidden border border-gray-800"
              >
                <Image
                  src={img}
                  alt={`${movie.title} image ${idx + 1}`}
                  fill
                  unoptimized
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
