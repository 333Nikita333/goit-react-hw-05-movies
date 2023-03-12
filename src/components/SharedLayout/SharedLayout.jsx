import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </header>
  );
};
export default SharedLayout;
