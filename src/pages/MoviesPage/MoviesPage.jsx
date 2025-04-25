import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";

const MoviesPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleChangeQuery = (newValue) => {
    setSearchValue(newValue);
  };
  return (
    <div>
      <SearchBar handleChangeQuery={handleChangeQuery} />
    </div>
  );
};

export default MoviesPage;
