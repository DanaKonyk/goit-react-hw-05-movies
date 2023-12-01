import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div>
      <header className={css.header}>
        <nav>
          <ul className={css.list}>
            <li className={css.item}>
              <NavLink className={css.link} to="/">
                Home
              </NavLink>
            </li>
            <li className={css.item}>
              <NavLink className={css.link} to="/movies">
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
