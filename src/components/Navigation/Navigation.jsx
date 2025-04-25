import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

import { useEffect, useState } from "react";
import { fetchMovies } from "../../services/api";
import MovieList from "../MovieList/MovieList";

const setActiveClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <div>
      <nav className={s.nav}>
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={setActiveClass} to="/movies">
          Movies
        </NavLink>
        {/* <NavLink className={setActiveClass} to="/movies/:movieId">
          MovieDetailsPage
        </NavLink> */}
      </nav>
    </div>
  );
};

export default Navigation;
