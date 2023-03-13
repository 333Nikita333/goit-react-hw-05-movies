import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <header>
        <b>MovieTeka</b>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>

      <Suspense fallback={<h2>Loading...</h2>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
export default SharedLayout;
