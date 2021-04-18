import React, { Component } from 'react';

import './HomePage.scss';
import axios from 'axios';
import MovieList from '../MovieList';

class HomePage extends Component {
  state = {
    trending: [],
  };

  componentDidMount() {
    const key = '3550330ecc32a34c7342dbd44dd96d6e';
    const requestLink = `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`;
    axios.get(requestLink).then(({ data }) => {
      this.setState({
        trending: data.results,
      });
    });
  }

  render() {
    const { trending } = this.state;
    console.log(this.props);
    return (
      <div>
        <h2>Trending today</h2>
        <MovieList movieList={trending} />
      </div>
    );
  }
}

export default HomePage;
