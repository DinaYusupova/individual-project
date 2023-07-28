import React, { useState } from "react";
import { PostType } from "./types/Postype";
import "./index.css";

type PropPostType = {
  post: PostType | undefined;
  setClick: React.Dispatch<React.SetStateAction<number>>;
};

export default function RandomMoviesPage({
  post,
  setClick,
}: PropPostType): JSX.Element {
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
                  src={post?.poster.url}
                  alt="FilmPoster"
                  className="FilmURL"
                />
              </a>
            </div>
            <div className="column-item">
              <div className="description">
                <div className="filmName">
                  <h1>{post?.name}</h1>
                </div>

                <div className="filmDescription">
                  <h2>{post?.description}</h2>
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
                  {post?.persons.map((person, i) =>
                    i < 5 ? <h4> {person.name}</h4> : null
                  )}
                </div>
              </div>
            </div>
            <button
              className="button"
              onClick={() => setClick((prev) => prev + 1)}
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
