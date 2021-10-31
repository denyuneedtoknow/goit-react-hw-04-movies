import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GetMovieByName } from "../../../Services/GetMovies";
import { useState, useEffect } from "react";
import s from "../../Views/Views.module.css";
import SearchBar from "../../SearchBar";

const MoviesView = () => {
  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (keyword === "") {
      return;
    }
    GetMovieByName(keyword).then((data) => {
      console.log(data);
      setMovies(data);
    });
  }, [keyword]);

  const handleFormSubmit = (keyword) => {
    setKeyword(keyword);
    console.log(movies);
  };

  return (
    <>
      {" "}
      <div>
        <h1>Search for the movie</h1>
        <SearchBar onSubmit={handleFormSubmit} />
        <ul>
          {movies.map((movie) => {
            return <li key={movie.id}>{movie.title}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default MoviesView;
