import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GetMovieByName, GetMovieCast } from "../../../Services/GetMovies";
import { useState, useEffect } from "react";
import s from "../../Views/Views.module.css";
import SearchBar from "../../SearchBar";

const MoviesView = () => {
  const APIadress = "https://image.tmdb.org/t/p/w500/";
  const [movies, setMovies] = useState([]);

  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (keyword === "") {
      return;
    }
    GetMovieByName(keyword).then((data) => {
      setMovies(data.data.results);
    });

  }, [keyword]);

  const handleFormSubmit = (keyword) => {
    setKeyword(keyword);
  };

  if (movies) {
    return (
      <>
        {" "}
        <div>
          <h1>Search for the movie</h1>
          <SearchBar onSubmit={handleFormSubmit} />
          <ul>
            {movies.map((movie) => {
              return <li key={movie.id}> <Link to={`/movies/${movie.id}`}>
                <div className={s.movieCardThumb}>
                  <h2>{movie.title}</h2>
                  <img
                    alt={movie.title}
                    src={`${APIadress}${movie.backdrop_path}`}
                  />
                </div>
              </Link></li>;
            })}
          </ul>
        </div>
      </>
    );
  }
};

export default MoviesView;
