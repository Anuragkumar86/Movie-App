// src/components/MovieCard.tsx
import Link from "next/link";
import Image from "next/image";
import { Movie } from "@/app/page";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <article
      className="
        group 
        bg-gray-900 
        border border-gray-800
        rounded-2xl 
        overflow-hidden 
        shadow-lg 
        hover:shadow-2xl 
        transition-all 
        duration-300
        hover:-translate-y-1
      "
    >
      <Link href={`/movie/${movie.slug}`} className="block">

        {/* — Poster Section — */}
        <div className="relative h-64 w-full overflow-hidden bg-gray-800">

          <Image
            src={movie.poster}
            alt={movie.title}
            fill
            unoptimized
            className="
              object-cover 
              object-center 
              transition-transform 
              duration-500 
              group-hover:scale-110
            "
          />

          {/* Gradient Overlay */}
          <div className="
            absolute inset-0 
            bg-gradient-to-t 
            from-black/60 via-black/10 to-transparent 
            pointer-events-none
          " />

          {/* Rating + Type Badge */}
          <div className="absolute top-3 left-3 flex gap-2">
            <span className="
              px-2 py-1 
              text-sm font-semibold 
              rounded-md 
              bg-yellow-500/90 
              text-black shadow
            ">
              ⭐ {movie.imdbRating !== null ? movie.imdbRating.toFixed(1) : "N/A"}
            </span>

            <span className="
              px-2 py-1 
              text-xs uppercase font-medium 
              bg-white/10 backdrop-blur 
              border border-white/20 
              rounded-md 
              text-gray-100
            ">
              {movie.type}
            </span>
          </div>

        </div>

        {/* — Content Section — */}
        <div className="p-4">
          <h3 className="
            text-lg font-semibold 
            text-white
            group-hover:text-blue-400 
            transition
            line-clamp-2
          ">
            {movie.title}
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            {movie.year}
          </p>

          <div className="mt-2 flex flex-wrap gap-2">
            {movie.genre.slice(0, 2).map((g) => (
              <span 
                key={g}
                className="
                  text-xs px-2 py-1 
                  rounded-full 
                  bg-gray-800 
                  text-gray-300 
                  border border-gray-700
                "
              >
                {g}
              </span>
            ))}
          </div>

          <p className="mt-3 text-sm text-gray-400 line-clamp-3">
            {movie.plot}
          </p>

          <div className="mt-4 text-xs font-medium text-blue-400 opacity-70 group-hover:opacity-100 transition">
            View Details →
          </div>
        </div>

      </Link>
    </article>
  );
}
