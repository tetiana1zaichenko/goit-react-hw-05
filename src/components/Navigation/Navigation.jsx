import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

import { useEffect, useState } from "react";
import { fetchMovies } from "../../pages/services/api";
import MovieList from "../MovieList/MovieList";

const setActiveClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const movies = await fetchMovies();
        setMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    console.log(movies);
  }, []);
  return (
    <div>
      <nav className={s.nav}>
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={setActiveClass} to="/movies">
          Movies
        </NavLink>
        {/* убрать */}
        <NavLink className={setActiveClass} to="/movies/:movieId">
          MovieDetailsPage
        </NavLink>
        {/*  убрать */}
      </nav>
      <MovieList data={movies} />
    </div>
  );
};

export default Navigation;
