import React from "react";
import { useParams, useRouteMatch, useHistory } from "react-router-dom";
import { GetMovieReview } from "../../Services/GetMovies";
import { useState, useEffect } from "react";
import s from "../Cast/Cast.module.css";


const Cast = () => {
    const params = useParams()
    const [reviews, setReviews] = useState([]);
    useEffect(() => {

        GetMovieReview(params.movieId).then((data) => {
            console.log(data.data.results);
            setReviews(data.data.results);
        })

    }, [params.movieId]);

    return (
        <div>
            <h2>Reviews</h2>
            {reviews && <ul>
                {reviews.map((review) => {
                    return <li key={review.id}><div><h3>{review.author}</h3><p>{review.content}</p></div></li>
                })}
            </ul>}
        </div>
    )
}

export default Cast