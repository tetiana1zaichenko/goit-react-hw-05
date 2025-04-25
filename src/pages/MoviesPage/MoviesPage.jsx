import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = ({ movies }) => {
  // const [searchValue, setSearchValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const handleChangeQuery = (newValue) => {
    if (!newValue) {
      searchParams.delete("query");
      return setSearchParams(searchParams);
    }
    // setSearchValue(newValue);
    searchParams.set("query", newValue);
    setSearchParams(searchParams);
  };

  const filteredData = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      <MovieList data={filteredData} />
    </div>
  );
};

export default MoviesPage;
