import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navigation from './components/Navigation';
import MoviesPage from './components/MoviesPage';
import MovieDetailsPage from './components/MovieDetailsPage';

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route exact path="/movies/:movieId" component={MovieDetailsPage} />
      </Switch>
    </>
  );
};

export default App;
