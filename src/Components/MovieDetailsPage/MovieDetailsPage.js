import React from "react";
import { useParams, useRouteMatch, useHistory, Link, Switch, Route, useLocation } from "react-router-dom";
import { GetMovieById } from "../../Services/GetMovies";
import { useState, useEffect, lazy, Suspense } from "react";
import s from "../MovieDetailsPage/MovieDetailsPage.module.css";
import GoBackBtn from '../GoBackBtn'

const Cast = lazy(() => import('../Cast'),)
const Review = lazy(() => import('../Review'),)


const MovieDetailsPage = () => {
  const APIadress = "https://image.tmdb.org/t/p/w500/";
  const params = useParams();
  const location = useLocation()
  const { url, } = useRouteMatch()
  const history = useHistory()
  const [backAddress, setBackAddress] = useState({})
  const [movieDetails, setMovieDetails] = useState({});


  useEffect(() => {
    GetMovieById(params.movieId).then((r) => {
      setMovieDetails(r.data);
      if (location.state) {
        setBackAddress({ pathname: `${location.state.from.pathname}`, search: `${location.state.from.search}` })
      } else { setBackAddress({ pathname: `/`, search: `` }) }
    });

  }, [params.movieId, location.state]);

  const GoBackBtnClick = () => {

    history.push({
      ...backAddress
    });

  }


  return (
    <>
      {" "}

      <div>
        <GoBackBtn onClick={GoBackBtnClick} />
        {(movieDetails) &&
          <>        <h1>{movieDetails.title}</h1>
            <img
              alt={movieDetails.title}
              src={`${APIadress}${movieDetails.backdrop_path}`}
            />
            <p className={s.movieView}>{movieDetails.overview}</p></>}
        <div className={s.moreInfoMenu}>
          <Link className={s.moreInfoBtn} to={`${url}/cast`}><p >Cast</p></Link>
          <Link className={s.moreInfoBtn} to={`${url}/review`}><p >Review</p></Link>
        </div>

        <Suspense fallback={<h1>loading</h1>}>
          <Switch>
            <Route path='/Movies/:movieId/cast'>
              <Cast />
            </Route>
            <Route path='/Movies/:movieId/review'>
              <Review />
            </Route>
          </Switch>
        </Suspense>

      </div>
    </>
  );
};

export default MovieDetailsPage;
