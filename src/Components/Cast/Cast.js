import React from "react";
import { useParams, useRouteMatch, useHistory } from "react-router-dom";
import { GetMovieCast } from "../../Services/GetMovies";
import { useState, useEffect } from "react";
import s from "../Cast/Cast.module.css";
import defaultImage from '../../Images/unknown.jpg'


const Cast = () => {
    const APIadress = "https://image.tmdb.org/t/p/w500/"
    const params = useParams()
    const [cast, setCast] = useState([]);
    useEffect(() => {

        GetMovieCast(params.movieId).then((data) => {

            setCast(data.data.cast);
        })

    }, [params.movieId]);

    return (
        <div>
            <h2>Starring</h2>
            <ul className={s.actorsList}>
                {cast.map((actor) => {
                    return <li key={actor.id}><div className={s.actorCard}><img className={s.profilePhoto} src={actor.profile_path ? `${APIadress}${actor.profile_path}` : defaultImage} alt={actor.name} /><p>{actor.name}</p>as<p>{actor.character}</p></div></li>
                })}
            </ul>
        </div>
    )
}

export default Cast