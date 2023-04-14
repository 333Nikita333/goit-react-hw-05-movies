import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getSearchMovie } from 'services/movieSearchAPI';
import { Notification } from 'components/MovieList/MovieList.styled';
import MovieList from 'components/MovieList';
import SearchBar from 'components/SearchBar';
import MyLoader from 'components/Skeleton/Skeleton';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searched, setSearched] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const movieName = searchParams.get('query') ?? '';
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setNoResults(false);
    if (movieName) {
      setSearched(true);
      getSearchMovie(movieName)
        .then(movies => {
          setMovies(movies);
          if (movies.length === 0) {
            setNoResults(true);
          }
          setIsLoading(false);
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
        <Notification>No results found for your search query</Notification>
      )}

      {searched && !noResults && (
        <>{isLoading ? <MyLoader /> : <MovieList movies={movies} />}</>
      )}
    </>
  );
};

export default Movies;
