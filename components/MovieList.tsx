// src/components/MovieList.tsx
import React from "react";
import { Movie } from "@/app/page";
import MovieCard from "./MovieCard";

interface MovieListProps {
  movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
  if (!movies || movies.length === 0) {
    return (
      <div className="py-16 text-center text-gray-400">
        No results found. Try adjusting your filters.
      </div>
    );
  }

  return (
    <section aria-label="Movie List">
      <div 
        className="
          grid grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-6 
          animate-fadeIn
        "
      >
        {movies.map((movie) => (
          <MovieCard 
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </section>
  );
}
