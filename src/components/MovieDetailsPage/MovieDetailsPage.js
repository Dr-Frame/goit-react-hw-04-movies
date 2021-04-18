import React, { Component } from 'react';
import './MovieDetailsPage';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import Cast from '../Cast';

class MovieDetailsPage extends Component {
  state = {
    id: this.props.match.params.movieId,
    movie: {},
  };

  componentDidMount() {
    const { id } = this.state;

    const key = '3550330ecc32a34c7342dbd44dd96d6e';
    const requestLink = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`;
    axios.get(requestLink).then(({ data }) => {
      this.setState({
        movie: data,
      });
    });
  }

  render() {
    const { movie, id } = this.state;
    console.log(this.props);

    return (
      <div>
        <p>Film details</p>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="movie-poster"
            width="200"
          ></img>
        </div>
        <div>
          <h2>{movie.title}</h2>
          <p>User rate: {movie.vote_average}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>
            Genres:
            {/* {movie.genres.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })} */}
          </h3>
        </div>
        <div>
          <p>Additional information</p>
          <Link to={`/movies/${id}/cast`}>Cast</Link>
          <br></br>
          <Link>Reviews</Link>
        </div>
        <Route
          path={`${this.props.match.url}/cast`}
          render={props => {
            console.log(props);
            const id = Number(this.props.match.params.movieId);
            return <Cast {...props} id={id} />;
          }}
        />
      </div>
    );
  }
}

export default MovieDetailsPage;
