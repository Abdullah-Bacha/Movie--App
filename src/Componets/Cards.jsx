import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useMovieContext } from "../Context/MyContext";
import WatchlistButton from "./Watchlist";
import {
  FaStar,
  FaCalendarAlt,
  FaDownload,
  FaInfoCircle,
} from "react-icons/fa";
import { FaFire } from "react-icons/fa";

function Cards() {
  const { movies, searchQuery } = useMovieContext();

  return (
    <div className="space-y-6">
      <div
        className="w-full rounded-lg px-8 py-4 text-white
               bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600
               shadow-md"
      >
        <div className="flex items-center gap-3">
          <span className="bg-white/20 p-2 rounded-full">
            <FaFire className="text-yellow-300 text-xl" />
          </span>

          <h1 className="text-3xl font-extrabold tracking-tight">
            Trending Now
          </h1>
        </div>

        <p className="mt-3 max-w-3xl text-base text-white/90 leading-relaxed">
          Discover the latest blockbusters and critically acclaimed films. Your
          next favorite movie is just a click away.
        </p>
      </div>

      <div
        className="
    grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
    gap-4 px-4 md:px-0
    max-w-7xl mx-auto
    transition-all duration-300
  "
      >
        {movies?.map((movie) => (
          <div
            key={movie.id}
            className="
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:shadow-2xl
        hover:scale-[1.03]
      "
          >
            <MoviesCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

const MoviesCard = ({ movie }) => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300">
      <figure className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="
    w-full
    h-72
    sm:h-96
    md:h-80
    lg:h-96
    rounded-xl
    object-cover
    shadow-lg
    transition-transform
    duration-400
    hover:scale-105
    hover:shadow-2xl
  "
        />

        <span
          className="absolute top-2 right-2 flex items-center gap-1
                 bg-black/70 text-yellow-400 text-xs font-semibold
                 px-2 py-1 rounded"
        >
          <FaStar />
          {movie.vote_average.toFixed(1)}
        </span>
      </figure>

      <div className="card-body p-4 space-y-3">
        <h2 className="card-title text-base font-semibold line-clamp-1">
          {movie.title}
        </h2>
        <div className="space-y-1 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <FaDownload className="text-blue-500" />
            <span className="font-medium">Downloads</span>
            <span className="ml-auto">{movie.vote_count}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-green-400" />
            <span className="font-medium">Release</span>
            <span className="ml-auto">{movie.release_date}</span>
          </div>
        </div>

        <div className="card-actions pt-3 flex gap-3">
          <Link
            to={`/movie/${movie.id}`}
            className="flex-1 flex items-center justify-center gap-2
                   px-3 py-2 rounded-md
                   bg-blue-600 text-white text-xs font-medium
                   hover:bg-blue-700 transition"
          >
            <FaInfoCircle />
            Details
          </Link>

          <WatchlistButton />
        </div>
      </div>
    </div>
  );
};

export default Cards;
