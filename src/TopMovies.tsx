import React from "react";
import { PostsType } from "./types/PostsType";
import { Film } from "./types/PostsType";

type PropPostType = {
  posts: PostsType | undefined;
  setClick: React.Dispatch<React.SetStateAction<number>>;
};

export default function TopMovies({
  posts,
  setClick,
}: PropPostType): JSX.Element {
  const rand: number = Math.round(1 - 0.5 + Math.random() * (20 - 1 + 1));
  const post: Film | undefined = posts?.films.find(
    (film) => film.filmId === rand
  );

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
                    i < 5 ? <h4> {person.genre}</h4> : null
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
