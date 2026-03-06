import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaStar,
  FaCalendarAlt,
  FaClock,
  FaGlobe,
  FaFire,
  FaQuoteLeft,
} from "react-icons/fa";

const MovieDetails = () => {
  const { id } = useParams(); // movie id from URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`,
        );
        setMovie(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-4 md:p-10 flex flex-col md:flex-row gap-8 text-white max-w-7xl mx-auto">
      <div className="flex-none flex justify-center md:block">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="w-full max-w-[300px] md:max-w-md rounded-2xl shadow-2xl border border-white/10"
          alt={movie.title}
        />
      </div>

      <div className="flex-1 space-y-6">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight text-center md:text-left">
          {movie.original_title}
        </h1>
        {movie.tagline && (
          <p className="flex items-center justify-center md:justify-start gap-2 text-base md:text-lg italic text-gray-400">
            <FaQuoteLeft className="text-blue-500" />
            {movie.tagline}
          </p>
        )}

        <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-6 text-xs md:text-sm text-gray-300">
          <span className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
            <FaStar className="text-yellow-400" />
            <strong>{movie.vote_average.toFixed(1)}</strong>/10
          </span>

          <span className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
            <FaCalendarAlt className="text-green-400" />
            {movie.release_date}
          </span>

          <span className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
            <FaClock className="text-purple-400" />
            {movie.runtime} min
          </span>

          <span className="flex items-center gap-2 uppercase bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
            <FaGlobe className="text-blue-400" />
            {movie.original_language}
          </span>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-bold border-b border-white/10 pb-2">Overview</h3>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            {movie.overview}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-white/5 p-4 rounded-xl flex items-center gap-4 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
              <FaFire className="text-orange-500 text-xl" />
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Popularity</p>
              <p className="text-white font-bold text-lg">
                {movie.popularity.toFixed(0)}
              </p>
            </div>
          </div>

          <div className="bg-white/5 p-4 rounded-xl flex items-center gap-4 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-yellow-400/20 flex items-center justify-center">
              <FaStar className="text-yellow-400 text-xl" />
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Rating</p>
              <p className="text-white font-bold text-lg">
                {movie.vote_average}/10
              </p>
            </div>
          </div>

          <div className="bg-white/5 p-4 rounded-xl flex items-center gap-4 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-purple-400/20 flex items-center justify-center">
              <FaClock className="text-purple-400 text-xl" />
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Runtime</p>
              <p className="text-white font-bold text-lg">{movie.runtime}m</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
