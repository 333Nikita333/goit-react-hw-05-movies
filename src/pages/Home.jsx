import MovieList from 'components/MovieList';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getTrendingMovies } from 'services/movieSearchAPI';
import Skeleton from 'components/Skeleton';

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getTrendingMovies()
      .then(data => {
        setTrendingMovies(data);
        setIsLoading(false);
      })
      .catch(console.log);
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      {isLoading ? <Skeleton /> : <MovieList movies={trendingMovies} />}
    </>
  );
};

export default Home;
