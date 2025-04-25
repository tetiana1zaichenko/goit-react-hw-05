import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const MovieList = ({ data }) => {
  //   const [searchValue, setSearchValue] = useState("");
  //   const handleChangeQuery = (newValue) => {
  //     setSearchValue(newValue);
  //   };
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
