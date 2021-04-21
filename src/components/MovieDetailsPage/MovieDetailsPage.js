import React, { Component } from 'react';
import './MovieDetailsPage';
import { NavLink, Route, Switch, withRouter } from 'react-router-dom';
import axios from 'axios';
import Cast from '../Cast/Cast';
import Review from '../Reviews';
import './MovieDetailsPage.scss';

class MovieDetailsPage extends Component {
  state = {
    title: null,
    vote_average: null,
    overview: null,
    poster_path: null,
    genres: [],
  };

  async componentDidMount() {
    const id = this.props.match.params.movieId;
    const key = '3550330ecc32a34c7342dbd44dd96d6e';
    const requestLink = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`;

    const response = await axios.get(requestLink).then(({ data }) => data);

    this.setState({
      title: response.title,
      vote_average: response.vote_average,
      overview: response.overview,
      poster_path: response.poster_path,
      genres: response.genres,
    });
  }

  handleGoBack = () => {
    const { history, location } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }

    history.push('/');
  };

  render() {
    const { title, vote_average, overview, poster_path, genres } = this.state;
    const { match } = this.props;
    console.log(this.props);

    return (
      <div className="MovieDetailsPage">
        <div className="MovieDetailsPage__header">
          <p className="MovieDetailsPage__head-title">Film details</p>

          <button
            className="MovieDetailsPage__btn"
            type="button"
            onClick={this.handleGoBack}
          >
            Go back
          </button>
        </div>

        <div className="MovieDetailsPage__movie-info">
          <div>
            {poster_path && (
              <img
                className="MovieDetailsPage__poster"
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt="movie-poster"
                width="200"
              ></img>
            )}
          </div>
          <div>
            <h2 className="MovieDetailsPage__top">{title}</h2>
            <p className="MovieDetailsPage__vote">
              User rate: <span>{vote_average}</span>
            </p>
            <h3 className="MovieDetailsPage__title">Overview</h3>
            <p className="MovieDetailsPage__descr">{overview}</p>
            <p className="MovieDetailsPage__title">Genres:</p>
            <ul className="MovieDetailsPage__genres">
              {genres.map(({ id, name }) => {
                return (
                  <li key={id} className="MovieDetailsPage__genres--item">
                    {name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="MovieDetailsPage__additional">
          <p className="MovieDetailsPage__extra">Additional information</p>
          <ul>
            <li>
              <NavLink
                className="MovieDetailsPage__extra-link"
                to={{
                  pathname: `${match.url}/cast`,
                  state: {
                    from: this.props.location,
                  },
                }}
              >
                Cast
              </NavLink>
            </li>
            <li className="MovieDetailsPage">
              <NavLink
                className="MovieDetailsPage__extra-link"
                to={{
                  pathname: `${match.url}/reviews`,
                  state: {
                    from: this.props.location,
                  },
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>

        <Switch>
          <Route
            path={`${match.path}/cast`}
            render={() => <Cast id={Number(this.props.match.params.movieId)} />}
          />
          <Route
            path={`${match.path}/reviews`}
            render={() => (
              <Review id={Number(this.props.match.params.movieId)} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(MovieDetailsPage);
