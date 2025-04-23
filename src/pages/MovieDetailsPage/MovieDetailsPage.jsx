import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const MovieDetailsPage = () => {
  return (
    <div>
      <h2>MovieDetailsPage</h2>
      <nav>
        <NavLink to="cast">MovieCast</NavLink>
        <NavLink to="reviews">MovieReviews</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
