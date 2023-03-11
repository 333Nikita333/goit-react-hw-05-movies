import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
        </nav>
      </header>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
