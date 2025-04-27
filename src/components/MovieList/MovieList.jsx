import { Link, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const MovieList = ({ data }) => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link state={location} to={`/movies/${item.id}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
