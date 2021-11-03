import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={s.navigation}>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
        Home
      </NavLink>
      <NavLink to="/Movies" className={s.link} activeClassName={s.activeLink}>
        Search Movies
      </NavLink>
    </div>
  );
};

export default Navigation;
