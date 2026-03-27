import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("popular"); // Default category
  const [searchQuery, setSearchQuery] = useState("");

  const fetchMovies = async (cat = "popular", query = "") => {
    try {
      let url = `https://api.themoviedb.org/3/movie/${cat}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=1`;
      
      if (query) {
        url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${encodeURIComponent(query)}&language=en-US&page=1`;
      }

      const response = await axios.get(url);
      setMovies(response.data.results);
    } catch (error) {
      if (error.response?.status === 401) {
        console.error("401 Unauthorized: Please check your TMDB API Key in Vercel settings.");
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
