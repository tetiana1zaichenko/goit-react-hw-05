import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { fetchMovieById } from "../../services/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMovieById(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);
  return (
    <div>
      <h2>{movie.original_title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.original_title}
      />
      <p>Genres</p>
      {movie.genres?.map((genre) => (
        <span key={genre.id}>{genre.name} </span>
      ))}
      <p>Overview: {movie.overview}</p>
      <p>Popularity: {movie.popularity}</p>
      <nav>
        <NavLink to="cast">MovieCast</NavLink>
        <NavLink to="reviews">MovieReviews</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
