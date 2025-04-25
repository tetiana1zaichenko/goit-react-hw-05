import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviewsById } from "../../services/api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMovieReviewsById(movieId);
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);
  return (
    <div>
      <ul>
        {reviews.map((item) => (
          <li key={item.id}>
            {item.author}, {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
