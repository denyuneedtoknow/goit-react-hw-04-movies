import React from "react";
import { useParams, useRouteMatch, useHistory, Link, Switch, Route } from "react-router-dom";
import { GetMovieById, GetMovieCast } from "../../Services/GetMovies";
import { useState, useEffect } from "react";
import s from "../MovieDetailsPage/MovieDetailsPage.module.css";
import Cast from '../Cast'
import Review from '../Review'

const MovieDetailsPage = () => {
  const APIadress = "https://image.tmdb.org/t/p/w500/";
  const params = useParams();
  const { url, path } = useRouteMatch()
  const history = useHistory()
  console.log(history.location);

  const [movieDetails, setMovieDetails] = useState({});


  useEffect(() => {
    GetMovieById(params.movieId).then((r) => {
      setMovieDetails(r.data);
    });

  }, [params.movieId]);

  //   console.log(movieDetails);
  return (
    <>
      {" "}

      <div>
        {movieDetails &&
          <>        <h1>{movieDetails.title}</h1>
            <img
              alt={movieDetails.title}
              src={`${APIadress}${movieDetails.backdrop_path}`}
            />
            <p>{movieDetails.overview}</p></>}
        <Link to={`${url}/cast`}>Cast</Link>
        <Link to={`${url}/review`}>Review</Link>





        <Switch>
          <Route path='/Movies/:movieId/cast'>
            <Cast />
          </Route>
          <Route path='/Movies/:movieId/review'>
            <Review />
          </Route>

        </Switch>

      </div>
    </>
  );
};

export default MovieDetailsPage;
