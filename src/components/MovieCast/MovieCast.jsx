import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCastById } from "../../services/api";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMovieCastById(movieId);
        setCasts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);
  return (
    <div>
      <ul className={s.list}>
        {casts.map((item) => (
          <li className={s.list} key={item.id}>
            <img
              className={s.img}
              src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
              alt={item.name}
            />
            <p>{item.name}</p>
            <p>Character: {item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
