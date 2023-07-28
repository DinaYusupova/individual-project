import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import RandomMovies from "./RandomMovies";
import axios from "axios";
import { PostType } from "./types/Postype";
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import TopMovies from "./TopMovies";
import { PostsType } from "./types/PostsType";

function App(): JSX.Element {
  const [postRandom, setPostRandom] = useState<PostType>();
  const [clickRandom, setClickRandom] = useState<number>(0);
  const [postsPopular, setPostsPopular] = useState<PostsType>();
  const [clickPopular, setClickPopular] = useState<number>(0);

  const apiUrlR: string = "https://api.kinopoisk.dev/v1.3/movie/random"; // Замените на актуальный URL API
  const apiKeyR: string = "NNENF6F-CF94EM0-JM2C9BJ-GH9AXPV"; // Замените на свой собственный API ключ

  const apiUrlP: string =
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1";
  const apiKeyP: string = "a62f1360-78dc-496e-9b02-8d40001edcf4";

  const headers = {
    "X-API-KEY": apiKeyR,
  };

  useEffect(() => {
    axios
      .get(`${apiUrlR}`, { headers })
      .then((res) => {
        setPostRandom(res.data);
      })
      .catch((error) => {
        console.error("Ошибка при выполнении запроса:", error);
      });
  }, [clickRandom]);

  // useEffect(() => {
  //   fetch(`${apiUrlP}`, {
  //     method: "GET",
  //     headers: {
  //       "X-API-KEY": apiKeyP,
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json);
  //     setPostsPopular(json))}}
  //     .catch((err) => console.log(err));
  // }, [clickPopular]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<RandomMovies post={postRandom} setClick={setClickRandom} />}
        />
        {/* <Route
          path="/popular"
          element={
            <TopMovies posts={postsPopular} setClick={setClickPopular} />
          }
        /> */}
      </Routes>
      <Footer />
    </>
  );
}
export default App;
