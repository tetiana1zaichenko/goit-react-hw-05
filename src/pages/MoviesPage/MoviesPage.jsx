import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMoviesByQuery } from "../../services/api";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        const data = await fetchMoviesByQuery(query);
        setMovies(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [query]);

  const handleChangeQuery = (newValue) => {
    if (!newValue) {
      searchParams.delete("query");
      return setSearchParams(searchParams);
    }

    searchParams.set("query", newValue);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      <MovieList data={movies} />
    </div>
  );
};

export default MoviesPage;
