import React, { Component } from 'react';
import axios from 'axios';
import MovieList from '../MovieList';
import { Route } from 'react-router-dom';

class MoviePage extends Component {
  state = {
    searchQuerry: '',
    movieList: [],
  };

  handleInputChange = e => {
    this.setState({
      searchQuerry: e.currentTarget.value,
    });
  };

  fetchSearchMovie = () => {
    const { searchQuerry } = this.state;
    const key = '3550330ecc32a34c7342dbd44dd96d6e';
    const requestLink = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${searchQuerry}&page=1`;
    axios.get(requestLink).then(({ data }) =>
      this.setState({
        movieList: data.results,
      }),
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    this.fetchSearchMovie();
  };

  render() {
    const { searchQuerry, movieList } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Type your query"
            value={searchQuerry}
            onChange={this.handleInputChange}
          ></input>
          <button type="submit">Search</button>
        </form>

        <MovieList movieList={movieList} />
      </div>
    );
  }
}

export default MoviePage;
