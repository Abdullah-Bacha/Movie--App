import React, { useState } from "react";
import { useMovieContext } from "../Context/MyContext";
import { FaFire, FaStar, FaClock, FaPlayCircle } from "react-icons/fa";

function Category() {
  const { setCategory } = useMovieContext();

  const categories = [
    { key: "popular", label: "Popular", icon: <FaFire /> },
    { key: "top_rated", label: "Top Rated", icon: <FaStar /> },
    { key: "upcoming", label: "Upcoming", icon: <FaClock /> },
    { key: "now_playing", label: "Now Playing", icon: <FaPlayCircle /> },
  ];

  const [active, setActive] = useState("popular");

  return (
    <div
      className="sticky top-0 z-40
                 bg-base-100/90 backdrop-blur
                 border-b shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        <ul className="flex gap-3 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <li key={cat.key}>
              <button
                onClick={() => {
                  setActive(cat.key);
                  setCategory(cat.key);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full
                            text-sm font-medium transition-all
                            ${
                              active === cat.key
                                ? "bg-blue-600 text-white shadow"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
              >
                <span className="text-base">{cat.icon}</span>
                {cat.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Category;
