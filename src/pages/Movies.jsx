import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services/movieSearchAPI';
import MovieList from 'components/MovieList';
import SearchBar from 'components/SearchBar';

const Movies = () => {
  const [foundMovies, setFoundMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    getSearchMovie(movieName)
      .then(setFoundMovies)
      .catch(error => error.message);
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.name.value;
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {foundMovies.length > 0 && <MovieList movies={foundMovies} />}
    </>
  );
};

export default Movies;
