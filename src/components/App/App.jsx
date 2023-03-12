import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
        </Route>
      </Routes>
    </div>
  );
};
