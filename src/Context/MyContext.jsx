import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("popular"); // Default category
  const [searchQuery, setSearchQuery] = useState("");

  const fetchMovies = async (cat = "popular", query = "") => {
    // Debugging: Check if VITE_TMDB_API_KEY is found (without showing the whole key)
    console.log("API Key found in env:", !!import.meta.env.VITE_TMDB_API_KEY);
    if (!import.meta.env.VITE_TMDB_API_KEY) {
      console.error("VITE_TMDB_API_KEY is missing! Make sure it's set in Vercel.");
    }

    try {
      let url = `https://api.themoviedb.org/3/movie/${cat}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=1`;
      
      if (query) {
        url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${encodeURIComponent(query)}&language=en-US&page=1`;
      }

      const response = await axios.get(url);
      setMovies(response.data.results);
      console.log("Movies fetched successfully:", response.data.results);
    } catch (error) {
      if (error.response?.status === 401) {
        console.error("401 ERROR: Your API Key is invalid or not authorized. Check Vercel settings.");
      } else {
        console.error("Error fetching movies:", error);
      }
    }
  };

  useEffect(() => {
    if (searchQuery) {
      fetchMovies(category, searchQuery);
    } else {
      fetchMovies(category);
    }
  }, [category, searchQuery]);

  return (
    <MovieContext.Provider
      value={{
        movies,
        category,
        setCategory,
        searchQuery,
        setSearchQuery,
        fetchMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
