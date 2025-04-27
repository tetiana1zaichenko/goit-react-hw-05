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
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        <ul>
          {reviews.map((item) => (
            <li key={item.id}>
              <h3>{item.author}</h3>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
