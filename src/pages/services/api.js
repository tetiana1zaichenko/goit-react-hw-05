import axios from "axios";

const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
//   "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjBkYTA0OTliNDAwMTE1NzQ2YmE0MWY4ZWNkYTc2NCIsIm5iZiI6MTc0NTQxMjk2MC42MDE5OTk4LCJzdWIiOiI2ODA4ZTM2MGIyYjcyMmFlZGY4YTBhMTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.DGEMAz_XNycv9A1LfxBEOvadXGBqOnJJf-JYhMyW8nE",
  },
};

export const fetchMovies = async () => {
  const response = await axios.get(url, options);
  return response.data.results;
};
