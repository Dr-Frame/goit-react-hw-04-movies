import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movieList }) => (
  <>
    <ul>
      {movieList.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} id={id}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </>
);

export default MovieList;

/* class MovieList extends Component {
  state = {
    movieList: [],
  };

  componentDidMount() {
    this.setState({
      movieList: this.props,
    });
    console.log(this.props);
  }

  render() {
    console.log(this.state);
    const { movieList } = this.state;

    return (
      <>
        <ul>
          {movieList.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} id={id}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MovieList;  */
