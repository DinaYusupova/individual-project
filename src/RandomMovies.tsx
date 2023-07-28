import React, { useState, useEffect } from "react";
import { PostType } from "./types/Postype";
import "./index.css";
import axios from "axios";

export default function RandomMoviesPage(): JSX.Element {
  const [postRandom, setPostRandom] = useState<PostType>();
  const [clickRandom, setClickRandom] = useState<number>(0);

  const apiUrlR: string = "https://api.kinopoisk.dev/v1.3/movie/random"; // Замените на актуальный URL API
  const apiKeyR: string = "NNENF6F-CF94EM0-JM2C9BJ-GH9AXPV"; // Замените на свой собственный API ключ

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

  return (
    <div className="new">
      <div className="container">
        <p className="containerText">Рандомное кино на сегодня</p>
      </div>
      <div className="column-container">
        <div className="cardsNew">
          <div className="card">
            <div className="photoFilms">
              <a href="https://www.kinopoisk.ru/">
                <img
                  src={postRandom?.poster.url}
                  alt="FilmPoster"
                  className="FilmURL"
                />
              </a>
            </div>
            <div className="column-item">
              <div className="description">
                <div className="filmName">
                  <h1>{postRandom?.name}</h1>
                </div>

                <div className="filmDescription">
                  <h2>{postRandom?.description}</h2>
                </div>
                <div className="filmDescription">
                  <h3>
                    <span>Год выпуска:</span> {postRandom?.year}
                  </h3>
                </div>
                <div className="filmDescription">
                  <h3>
                    <span>В ролях:</span>{" "}
                  </h3>
                  {postRandom?.persons.map((person, i) =>
                    i < 5 ? <h4 key={i}> {person.name}</h4> : null
                  )}
                </div>
              </div>
            </div>
            <button
              className="button"
              onClick={() => setClickRandom((prev) => prev + 1)}
            >
              {" "}
              СМЕНИТЬ{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
