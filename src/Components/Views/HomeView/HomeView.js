import React from "react"
import { Link, useRouteMatch, } from "react-router-dom"
import GetMovies from "../../../Services/GetMovies"
import { useState, useEffect } from "react"
import s from '../../Views/Views.module.css'






const HomeView = () => {
 
    const APIadress = 'https://image.tmdb.org/t/p/w500/'
    const [movies, setMovies] = useState([])


    useEffect(() => {
        GetMovies().then((data => {
            console.log(data);
            setMovies(data)
        }))
    }, [])

    return (
        <>        <div>
            <h1>Home</h1>
            <ul>
                {movies.map(movie => {
                    return (<li key={movie.id}><Link to={`/movies/${movie.id}`}><div className={s.movieCardThumb}><h2>{movie.title}</h2><img alt={movie.title} src={`${APIadress}${movie.backdrop_path}`} /></div></Link></li>)
                })}
            </ul>
        </div>
        </>
    )
}

export default HomeView