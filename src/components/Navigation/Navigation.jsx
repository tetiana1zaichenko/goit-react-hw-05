import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

const setActiveClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <div>
      {/* <h2>Navigation</h2> */}
      <nav className={s.nav}>
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={setActiveClass} to="/movies">
          Movies
        </NavLink>
        {/* <NavLink className={setActiveClass} to="/users">
          Users
        </NavLink> */}
      </nav>
    </div>
  );
};

export default Navigation;
