import React, { useEffect, useRef, useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  // useNavigate,
  useParams,
} from "react-router-dom";
import { NavLink } from "react-router-dom";
import { fetchMovieById } from "../../services/api";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  // const navigate = useNavigate();
  const location = useLocation();
  const goBackRef = useRef(location.state ?? "/movies");
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
    <div className={s.movieDetails}>
      <Link to={goBackRef.current}>Go back</Link>
      {/* <button onClick={() => navigate("/")}>Go back</button> */}
      <div className={s.movieConteiner}>
        <img
          className={s.img}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.original_title}
        />
        <div className={s.movieInfo}>
          <h2>{movie.original_title}</h2>
          <h3>Genres</h3>
          {movie.genres?.map((genre) => (
            <span key={genre.id}>{genre.name} </span>
          ))}
          <h3>Overview:</h3> {movie.overview}
          <h3>Popularity:</h3> {movie.popularity}
        </div>
      </div>
      <h3>Additional information</h3>
      <nav>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
