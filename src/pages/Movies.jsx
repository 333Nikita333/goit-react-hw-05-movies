import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services/movieSearchAPI';
import MovieList from 'components/MovieList';
import SearchBar from 'components/SearchBar';
import { toast } from 'react-toastify';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searched, setSearched] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    setNoResults(false);
    if (movieName) {
      setSearched(true);
      getSearchMovie(movieName)
        .then(movies => {
          setMovies(movies);
          if (movies.length === 0) {
            setNoResults(true);
          }
        })
        .catch(console.log);
    }
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.name.value;
    const nextParams = query !== '' ? { query } : {};

    if (query === '') {
      toast.error('Please enter your request');
    }

    setSearchParams(nextParams);

    e.target.name.value = '';
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {searched && noResults && (
        <div>No results found for your search query</div>
      )}
      {searched && !noResults && <MovieList movies={movies} />}
    </>
  );
};

export default Movies;
