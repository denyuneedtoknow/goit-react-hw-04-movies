import React from "react"
import { Link, NavLink } from "react-router-dom"
import GetMovies from '../../Services/GetMovies'
import { useState, useEffect } from "react"
import s from '../MovieDetailsPage/MovieDetailsPage.module.css'


const MovieDetailsPage = () => {
    // const [movies, setMovies] = useState([])

    // useEffect(() => {
    //     GetMovies().then((data => {
    //         console.log(data);
    //         setMovies(data)
    //     }))
    // }, [])

    return (
        <>        <div>
            <h1>Movie 001</h1>

        </div>
        </>
    )
}

export default MovieDetailsPage