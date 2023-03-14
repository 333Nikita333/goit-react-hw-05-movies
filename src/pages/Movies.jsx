import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services/movieSearchAPI';
import MovieList from 'components/MovieList';
import SearchBar from 'components/SearchBar';
import { toast } from 'react-toastify';

const Movies = () => {
  const [foundMovies, setFoundMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    getSearchMovie(movieName).then(setFoundMovies).catch(console.log);
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.name.value;
    const nextParams = query !== '' ? { query } : {};

    if (query === '') {
      toast.error('Please enter your request');
    }

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
