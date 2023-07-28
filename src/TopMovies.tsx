import React, { useEffect, useState } from "react";
import { PostsType } from "./types/PostsType";
import { Film } from "./types/PostsType";

export default function TopMovies(): JSX.Element {
  const [postsPopular, setPostsPopular] = useState<PostsType>();
  const [clickPopular, setClickPopular] = useState<number>(0);

  const apiUrlP: string =
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1";
  const apiKeyP: string = "a62f1360-78dc-496e-9b02-8d40001edcf4";

  useEffect(() => {
    fetch(`${apiUrlP}`, {
      method: "GET",
      headers: {
        "X-API-KEY": apiKeyP,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setPostsPopular(json);
      })
      .catch((err) => console.log(err));
  }, []);

  const rand: number = Math.round(1 - 0.5 + Math.random() * (20 - 1 + 1));
  const post: Film | undefined = postsPopular?.films[rand];

  return (
    <div className="new">
      <div className="container">
        <p className="containerText">Популярное кино</p>
      </div>
      <div className="column-container">
        <div className="cardsNew">
          <div className="card">
            <div className="photoFilms">
              <a href="https://www.kinopoisk.ru/">
                <img
                  src={post?.posterUrl}
                  alt="FilmPoster"
                  className="FilmURL"
                />
              </a>
            </div>
            <div className="column-item">
              <div className="description">
                <div className="filmName">
                  <h1>{post?.nameRu}</h1>
                </div>
                <div className="filmDescription">
                  <h3>
                    <span>Год выпуска:</span> {post?.year}
                  </h3>
                </div>
                <div className="filmDescription">
                  <h3>
                    <span>В ролях:</span>{" "}
                  </h3>
                  {post?.genres.map((person, i) =>
                    i < 5 ? <h4 key={i}> {person.genre}</h4> : null
                  )}
                </div>
              </div>
            </div>
            <button
              className="button"
              onClick={() => setClickPopular((prev) => prev + 1)}
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
