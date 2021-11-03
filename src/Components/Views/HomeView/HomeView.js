import React from "react";
import { Link, useLocation } from "react-router-dom";
import { GetTrandingMovies } from "../../../Services/GetMovies";
import { useState, useEffect } from "react";
import s from "../../Views/Views.module.css";

const HomeView = () => {
  const APIadress = "https://image.tmdb.org/t/p/w500/";
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    GetTrandingMovies().then((data) => {
      setMovies(data);
    });
  }, []);

  return (
    <>
      {" "}
      <div className={s.globalView}>
        <h1 className={s.header}>This week trending:</h1>
        <ul>
          {movies.map((movie) => {
            return (
              <li key={movie.id}>
                <Link
                  className={s.link}
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: { from: location },
                  }}
                >
                  <div className={s.movieCardThumb}>
                    <h2 className={s.movieTitle}>{movie.title}</h2>
                    <img
                      alt={movie.title}
                      src={
                        movie.poster_path
                          ? `${APIadress}${movie.poster_path}`
                          : "https://dummyimage.com/200x250/2a2a2a/ffffff&text=Movie+image+placeholder"
                      }
                    />
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default HomeView;
