import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout.jsx';
import Movies from 'pages/Movies.jsx';
import Cast from './Cast.jsx';
import MovieDetails from 'pages/MovieDetails.jsx';
import Reviews from './Reviews.jsx';
import Home from 'pages/Home.jsx';
import NotFound from 'pages/NotFound.jsx';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
