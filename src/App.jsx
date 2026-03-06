import React from "react";
import "./App.css";
import Navbar from "./Componets/Navbar";
import Category from "./Componets/Category";
import Cards from "./Componets/Cards";
import Footer from "./Componets/Footer";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./Componets/MovieDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <Category /> */}
              <Cards />
            </>
          }
        />

        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
