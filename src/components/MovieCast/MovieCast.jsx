import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCastById } from "../../services/api";

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
      <ul>
        {casts.map((item) => (
          <li key={item.id}>
            {item.name}, {item.character}
            <img
              src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
              alt={item.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
