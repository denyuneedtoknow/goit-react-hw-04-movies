import React from "react"
import { Link, NavLink } from "react-router-dom"
import s from './Navigation.module.css'



const Navigation = () => {

    return (
        <div>
            <h1 className={s.header}>Navigation</h1>
            <NavLink exact to='/' className={s.link} activeClassName={s.activeLink}>Home</NavLink>
            <NavLink to='/MoviesSearch' className={s.link} activeClassName={s.activeLink}>Search Movies</NavLink>
        </div>

    )
}

export default Navigation

