import MovieList from 'components/MovieList';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/movieSearchAPI';


const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setTrendingMovies).catch(console.log);
  }, []);

  console.log(trendingMovies);

  return (
    <main>
      <h1>Trending today</h1>
      <MovieList movies={trendingMovies} />
    </main>
  );
};
export default Home;
