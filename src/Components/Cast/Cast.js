import React from "react";
import { useParams, useRouteMatch, useHistory } from "react-router-dom";
import { GetMovieCast } from "../../Services/GetMovies";
import { useState, useEffect } from "react";
import s from "../Cast/Cast.module.css";


const Cast = () => {
    const params = useParams()
    const [cast, setCast] = useState([]);
    useEffect(() => {

        GetMovieCast(params.movieId).then((data) => {
            // console.log(data.data.cast);
            setCast(data.data.cast);
        })

    }, [params.movieId]);

    return (
        <div>
            <h2>Starring</h2>
            <ul>
                {cast.map((actor) => {
                    return <li key={actor.id}>{actor.name} as {actor.character}</li>
                })}
            </ul>
        </div>
    )
}

export default Cast