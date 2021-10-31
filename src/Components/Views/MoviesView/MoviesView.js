import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GetTrandingMovies } from "../../../Services/GetMovies";
import { useState, useEffect } from "react";
import s from "../../Views/Views.module.css";

const MoviesView = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    GetTrandingMovies().then((data) => {
      //   console.log(data);
      setMovies(data);
    });
  }, []);

  return (
    <>
      {" "}
      <div>
        <h1>Search for the movie</h1>

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
