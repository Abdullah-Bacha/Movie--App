import React, { useState } from "react";
import { FaBookmark } from "react-icons/fa";

const WatchlistButton = () => {
  const [isAdded, setIsAdded] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setIsAdded(!isAdded);
    setAnimate(true);

    // Remove animation class after 300ms
    setTimeout(() => setAnimate(false), 300);
  };

  return (
    <button
      onClick={handleClick}
      className={`
        flex-1 flex items-center justify-center gap-2
        px-3 py-2 rounded-md text-xs font-medium border transition
        ${
          isAdded
            ? "bg-green-600 text-white hover:bg-green-700"
            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
        }
      `}
    >
      <FaBookmark
        className={`transition-transform duration-300 ${
          animate ? "animate-bounce" : ""
        }`}
      />
      {isAdded ? "Added✅" : "Watchlist"}
    </button>
  );
};

export default WatchlistButton;
