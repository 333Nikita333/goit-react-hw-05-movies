import { Suspense, useState, useEffect } from 'react';
import { NavLink, useParams, useLocation, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'services/movieSearchAPI';
import BackLink from 'components/BackLink';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMovieDetails(movieId, 'details')
      .then(setMovieDetails)
      .catch(console.log);
  }, [movieId]);

  if (!movieDetails) return <h2>Loading...</h2>;

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieDetails;

  return (
    <>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width="300px"
          height="440px"
        />
        <h2>{`${title} (${release_date.slice(0, 4)})`}</h2>
        <p>User Score: {Math.round(vote_average) * 10}%</p>
        <b>Overview</b>
        <p>{overview}</p>
        <b>Genres</b>
        {genres.length === 0 ? (
          <p>No genres</p>
        ) : (
          <p>Genres: {genres.map(({ name }) => name).join(', ')}</p>
        )}
      </div>
      <h2>Additional Information</h2>
      <ul>
        <li>
          <NavLink to="cast" state={{ from: backLinkHref }}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </NavLink>
        </li>
      </ul>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
