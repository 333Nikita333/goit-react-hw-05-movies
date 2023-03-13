import BackLink from 'components/BackLink';
// import { getMovieDetails } from 'services/movieSearchAPI';

import { Suspense } from 'react';

// const { useState, useEffect } = require('react');
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  // const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  // useEffect(() => {
  //   getMovieDetails(id, 'details').then(setMovieDetails).catch(console.log);
  // }, [id]);

  // console.log(movieDetails);
  // const baseUrlImg = 'https://image.tmdb.org/t/p/original';
  console.log(movieId);
  return (
    <div>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <p>Movie: {movieId}</p>
      <ul>
        <li>
          <Link to="cast" state={{ from: backLinkHref }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </Link>
        </li>
      </ul>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
    // <>
    //   <div>
    //     <BackLink to={backLinkHref}>Go back</BackLink>
    //     <img
    //       src={baseUrlImg + movieDetails.poster_path}
    //       alt={movieDetails.original_title}
    //     />
    //     <h2>{`${movieDetails.original_title} (${movieDetails.release_date.slice(
    //       0,
    //       5
    //     )})`}</h2>
    //     <p>User Score: {Math.round(movieDetails.popularity)}%</p>
    //     <b>Overview</b>
    //     <p>{movieDetails.overview}</p>
    //     <b>Genres</b>
    //     <p>List of genres</p>
    //   </div>
    //   <div>
    //     <h2>Additional Information</h2>
    //   </div>
    // </>
  );
};

export default MovieDetails;
