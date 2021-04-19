import React, { Suspense, lazy } from 'react';
import './styles/base.scss';
import { Route, Switch } from 'react-router-dom';
/* import HomePage from './components/HomePage'; */
import Navigation from './components/Navigation';
/* import MoviesPage from './components/MoviesPage';
import MovieDetailsPage from './components/MovieDetailsPage'; */

const HomePage = lazy(() =>
  import('./components/HomePage' /* webpackChunkName: "HomePage" */),
);

const MoviesPage = lazy(() =>
  import('./components/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);

const MovieDetailsPage = lazy(() =>
  import(
    './components/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
  ),
);

const App = () => {
  return (
    <>
      <Navigation />
      <div className="container">
        <Suspense fallback={<h2>loading...</h2>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/movies" component={MoviesPage} />
            <Route path="/movies/:movieId" component={MovieDetailsPage} />
          </Switch>
        </Suspense>
      </div>
    </>
  );
};

export default App;
