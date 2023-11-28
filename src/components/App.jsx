import { NavLink, Route, Routes } from 'react-router-dom';
import { getTrendingMovies } from '../helper/api';
import Home from '../pages/Home/Home';

console.log(getTrendingMovies());

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink>Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/movies' element={ } /> */}
      </Routes>
    </div>
  );
};
