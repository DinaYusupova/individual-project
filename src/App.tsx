import React from "react";
import NavBar from "./NavBar";
import RandomMovies from "./RandomMovies";
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import TopMovies from "./TopMovies";

function App(): JSX.Element {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<RandomMovies />} />
        <Route path="/popular" element={<TopMovies />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
