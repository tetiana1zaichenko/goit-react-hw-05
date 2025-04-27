import React from "react";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = ({ movies }) => {
  return (
    <div>
      Trending today
      <MovieList data={movies} />
    </div>
  );
};

export default HomePage;
