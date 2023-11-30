import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div>
      <header className={css.header}>
        <nav>
          <ul className={css.list}>
            <li className={css.item}>
              <Link className={css.link} to="/">
                Home
              </Link>
            </li>
            <li className={css.item}>
              <Link className={css.link} to="/movies">
                Movies
              </Link>
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
