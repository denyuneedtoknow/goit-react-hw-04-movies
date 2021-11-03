import React from "react";
import {
  useParams,
  useRouteMatch,
  useHistory,
  Link,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { GetMovieById } from "../../Services/GetMovies";
import { useState, useEffect, lazy, Suspense } from "react";
import s from "../MovieDetailsPage/MovieDetailsPage.module.css";
import GoBackBtn from "../GoBackBtn";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Cast = lazy(() => import("../Cast" /*webpackChunkName: "Cast"*/));
const Review = lazy(() => import("../Review" /*webpackChunkName: "Review"*/));

const MovieDetailsPage = () => {
  const APIadress = "https://image.tmdb.org/t/p/w500/";
  const params = useParams();
  const location = useLocation();
  const { url } = useRouteMatch();
  const history = useHistory();
  const [backAddress, setBackAddress] = useState({});
  const [movieDetails, setMovieDetails] = useState({});
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    setStatus("pending");
    GetMovieById(params.movieId)
      .then((r) => {
        setMovieDetails(r.data);
        setStatus("resolved");

        if (location.state) {
          setBackAddress({
            pathname: `${location.state.from.pathname}`,
            search: `${location.state.from.search}`,
          });
        } else {
          return;
        }
      })
      .catch((err) => {
        setStatus("rejected");
      });
  }, [params.movieId, location.state]);

  const GoBackBtnClick = () => {
    history.push({
      ...backAddress,
    });
  };
  if (status === "idle") {
    return <div></div>;
  }
  if (status === "rejected") {
    return (
      <p>
        <h1>Search was not sucsessfull, try something else</h1>
      </p>
    );
  }
  if (status === "pending") {
    return (
      <div className={s.loader}>
        <Loader type="TailSpin" color="#00BFFF" height={120} width={120} />
      </div>
    );
  }
  if (status === "resolved") {
    return (
      <>
        {" "}
        <div>
          <GoBackBtn onClick={GoBackBtnClick} />
          {movieDetails && (
            <div className={s.movieInfo}>
              {" "}
              <h1 className={s.header}>{movieDetails.title}</h1>
              <img
                alt={movieDetails.title}
                src={
                  movieDetails.poster_path
                    ? `${APIadress}${movieDetails.poster_path}`
                    : "https://dummyimage.com/200x250/2a2a2a/ffffff&text=Movie+image+placeholder"
                }
              />
              <p className={s.movieView}>{movieDetails.overview}</p>
            </div>
          )}
          <div className={s.moreInfoMenu}>
            <Link className={s.moreInfoBtn} to={`${url}/cast`}>
              <p>Cast</p>
            </Link>
            <Link className={s.moreInfoBtn} to={`${url}/review`}>
              <p>Review</p>
            </Link>
          </div>

          <Suspense fallback={<h1>loading</h1>}>
            <Switch>
              <Route path="/Movies/:movieId/cast">
                <Cast />
              </Route>
              <Route path="/Movies/:movieId/review">
                <Review />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </>
    );
  }
};

export default MovieDetailsPage;
