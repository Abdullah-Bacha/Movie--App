import React, { useState, useCallback } from "react";
import { useMovieContext } from "../Context/MyContext";
import {
  FaFire,
  FaStar,
  FaClock,
  FaPlayCircle,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaFilm } from "react-icons/fa";
const CATEGORIES = [
  { key: "popular", label: "Popular", icon: FaFire },
  { key: "top_rated", label: "Top Rated", icon: FaStar },
  { key: "upcoming", label: "Upcoming", icon: FaClock },
  { key: "now_playing", label: "Now Playing", icon: FaPlayCircle },
];

function Navbar() {
  const { setCategory, searchQuery, setSearchQuery } = useMovieContext();
  const [active, setActive] = useState("popular");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCategoryChange = useCallback(
    (key) => {
      setActive(key);
      setCategory(key);
      setSearchQuery(""); // Clear search when category changes
      setMenuOpen(false); // Close mobile menu if open
    },
    [setCategory, setSearchQuery],
  );

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 to-indigo-900 shadow-md">
      <nav className="navbar px-4 md:px-16 py-4 text-white flex items-center justify-between">
        <div className="md:hidden flex-none">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn btn-ghost btn-circle text-2xl hover:bg-white/20 transition-all"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="flex-1 md:flex-none flex justify-center md:justify-start">
          <a className="btn btn-ghost gap-2 px-0 hover:bg-transparent">
            <div
              className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-xl
                    bg-primary/20 text-primary shadow-md"
            >
              <FaFilm className="text-lg md:text-xl" />
            </div>

            <span className="text-xl md:text-2xl font-extrabold tracking-wide">
              Movie<span className="text-secondary">Box</span>
            </span>
          </a>
        </div>

        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex gap-2">
            {CATEGORIES.map(({ key, label, icon: Icon }) => (
              <li key={key}>
                <button
                  onClick={() => handleCategoryChange(key)}
                  aria-label={label}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                    ${active === key && !searchQuery
                      ? "bg-blue-600 text-white shadow-lg scale-105"
                      : "bg-white/10 hover:bg-white/20 hover:scale-105"
                    }`}
                >
                  <Icon className="text-base" />
                  <span>{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-none flex items-center gap-2 md:gap-3">
          <div className="relative group">
            <FaSearch
              className="absolute left-3 top-1/2 -translate-y-1/2
               text-gray-400 transition-all duration-300
               group-focus-within:text-primary group-focus-within:scale-110"
            />

            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-32 sm:w-40 md:w-60 pl-10 pr-4 py-2 rounded-xl text-xs md:text-sm text-white placeholder-gray-400 bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 focus:outline-none focus:w-48 sm:focus:w-56 md:focus:w-72 focus:border-primary focus:ring-2 focus:ring-primary/40 hover:bg-white/20"
            />
          </div>

          <div className="dropdown dropdown-end">
            <button className="group btn btn-ghost btn-circle avatar transition-all duration-300 hover:scale-105">
              <div
                className="w-10 rounded-full overflow-hidden
                 ring ring-primary/60 ring-offset-base-100 ring-offset-2
                 transition-all duration-300
                 group-hover:ring-primary group-hover:ring-4"
              >
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="User Avatar"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </button>

            <ul
              className="menu menu-sm dropdown-content
               bg-base-100/95 backdrop-blur-md
               rounded-2xl mt-4 w-56 p-3 shadow-xl text-black
               border border-gray-200
               animate-[fadeInUp_0.25s_ease-out]"
            >
              <li>
                <a className="gap-3 rounded-lg hover:bg-primary/100 transition-colors text-white">
                  <span className="text-primary">👤</span>
                  Profile
                </a>
              </li>

              <li>
                <a className="gap-3 rounded-lg hover:bg-primary/100 transition-colors text-white">
                  <span className="text-primary">⚙️</span>
                  Settings
                </a>
              </li>

              <li className="mt-1 border-t">
                <a className="gap-3 rounded-lg text-error hover:bg-error/100 transition-colors text-white">
                  <span className="text-error">🚪</span>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-64 opacity-100 py-4 border-t border-white/10" : "max-h-0 opacity-0"
          } bg-slate-900/95 backdrop-blur-md px-4`}
      >
        <ul className="flex flex-col gap-2">
          {CATEGORIES.map(({ key, label, icon: Icon }) => (
            <li key={key}>
              <button
                onClick={() => handleCategoryChange(key)}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium transition-all
                  ${active === key && !searchQuery
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white/5 hover:bg-white/10"
                  }`}
              >
                <Icon className="text-base text-primary" />
                <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
