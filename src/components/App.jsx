import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout.jsx';
// import Movies from 'components/Movies/Movies.jsx';
// import MovieDetails from 'pages/MovieDetails/MovieDetails.jsx';
// import Cast from './Cast.jsx';
// import Reviews from './Reviews.jsx';
// import Home from 'pages/Home.jsx';
// import NotFound from 'pages/NotFound.jsx';

const Movies = lazy(() => import('components/Movies/Movies.jsx'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails.jsx'));
const Cast = lazy(() => import('./Cast.jsx'));
const Reviews = lazy(() => import('./Reviews.jsx'));
const Home = lazy(() => import('pages/Home.jsx'));
const NotFound = lazy(() => import('pages/NotFound.jsx'));

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
