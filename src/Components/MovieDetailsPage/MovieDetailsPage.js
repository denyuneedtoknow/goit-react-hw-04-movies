import React from "react";
import { useParams } from "react-router-dom";
import { GetMovieById } from "../../Services/GetMovies";
import { useState, useEffect } from "react";
import s from "../MovieDetailsPage/MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const APIadress = "https://image.tmdb.org/t/p/w500/";
  const params = useParams();

  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    GetMovieById(params.movieId).then((r) => {
      setMovieDetails(r.data);
    });
  }, []);
  //   console.log(movieDetails);
  return (
    <>
      {" "}
      <div>
        <h1>{movieDetails.title}</h1>
        <img
          alt={movieDetails.title}
          src={`${APIadress}${movieDetails.backdrop_path}`}
        />
        <p>{movieDetails.overview}</p>
      </div>
    </>
  );
};

export default MovieDetailsPage;
