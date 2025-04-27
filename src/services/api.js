import axios from "axios";

const urlTrend =
  "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjBkYTA0OTliNDAwMTE1NzQ2YmE0MWY4ZWNkYTc2NCIsIm5iZiI6MTc0NTQxMjk2MC42MDE5OTk4LCJzdWIiOiI2ODA4ZTM2MGIyYjcyMmFlZGY4YTBhMTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.DGEMAz_XNycv9A1LfxBEOvadXGBqOnJJf-JYhMyW8nE",
  },
};

export const fetchMovies = async () => {
  const response = await axios.get(urlTrend, options);
  return response.data.results;
};

export const fetchMovieById = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  return response.data;
};

export const fetchMovieCastById = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options
  );
  return response.data.cast;
};

export const fetchMovieReviewsById = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US`,
    options
  );
  return response.data;
};
