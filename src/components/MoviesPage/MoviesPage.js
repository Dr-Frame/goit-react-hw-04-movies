import React, { Component } from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MovieList from '../MovieList';
import './MoviesPage.scss';

class MoviePage extends Component {
  state = {
    searchQuerry: '',
    movieList: [],
  };

  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search);
    console.log(parsed.query);
    if (this.props.location.search !== '' && this.state.searchQuerry === '') {
      this.fetchSearchMovie(parsed.query);
    }
  }

  handleInputChange = e => {
    this.setState({
      searchQuerry: e.currentTarget.value,
    });
  };

  fetchSearchMovie = query => {
    const key = '3550330ecc32a34c7342dbd44dd96d6e';
    const requestLink = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1`;
    axios.get(requestLink).then(({ data }) =>
      this.setState({
        movieList: data.results,
      }),
    );
  };

  handleSubmit = e => {
    const { searchQuerry } = this.state;

    e.preventDefault();
    this.fetchSearchMovie(searchQuerry.trim());

    this.props.location.search = `?query=${this.state.searchQuerry}`;
  };

  render() {
    const { searchQuerry, movieList } = this.state;

    return (
      <div className="MoviesPage">
        <form className="MoviesPage__form" onSubmit={this.handleSubmit}>
          <input
            className="MoviesPage__input"
            type="text"
            placeholder="Type your query"
            value={searchQuerry}
            onChange={this.handleInputChange}
          ></input>
          <button className="MoviesPage__btn" type="submit">
            Search
          </button>
        </form>
        <MovieList movieList={movieList} searchQuerry={searchQuerry} />
      </div>
    );
  }
}

export default MoviePage;
