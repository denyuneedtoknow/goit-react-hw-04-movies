import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { GetMovieByName } from "../../../Services/GetMovies";
import { useState, useEffect } from "react";
import s from "../../Views/Views.module.css";
import SearchBar from "../../SearchBar";

const MoviesView = () => {
  const history = useHistory();
  const location = useLocation();
  const APIadress = "https://image.tmdb.org/t/p/w500/";
  const [movies, setMovies] = useState([]);
  const searchParam = new URLSearchParams(location.search).get("query") ?? "";

  useEffect(() => {
    if (searchParam === "") {
      return;
    }
    if (searchParam) {
      GetMovieByName(searchParam).then((data) => {
        setMovies(data.data.results);
      });
    }
  }, [searchParam]);

  const handleFormSubmit = (keyword) => {
    if (keyword) {
      history.push({
        ...location,
        search: `query=${keyword}`,
      });
    }
  };

  if (movies) {
    return (
      <>
        {" "}
        <div className={s.globalView}>
          <h1 className={s.header}>Search for the movie</h1>
          <SearchBar onSubmit={handleFormSubmit} />
          <ul className={s.itemGalery}>
            {movies.map((movie) => {
              return (
                <li key={movie.id}>
                  {" "}
                  <Link
                    className={s.link}
                    to={{
                      pathname: `/movies/${movie.id}`,
                      state: { from: location },
                    }}
                  >
                    <div className={s.movieCardThumb}>
                      <h2>{movie.title}</h2>
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
  }
};

export default MoviesView;
