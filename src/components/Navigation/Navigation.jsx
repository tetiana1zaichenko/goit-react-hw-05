import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <h2>Navigation</h2>
      <nav>
        <Link to="/">HomePage</Link>
        <Link to="/movies">MoviesPage</Link>
      </nav>
    </div>
  );
};

export default Navigation;
