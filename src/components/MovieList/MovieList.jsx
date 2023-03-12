import { NavLink, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <NavLink to={`/movies/${id}`} state={{ from: location }}>
            <p>{title}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default MovieList;
