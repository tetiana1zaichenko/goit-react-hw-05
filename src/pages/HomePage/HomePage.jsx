import React from "react";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = ({ movies }) => {
  return (
    <div>
      <MovieList data={movies} />
    </div>
  );
};

export default HomePage;
