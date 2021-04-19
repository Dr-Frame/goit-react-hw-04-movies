import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './MovieList.scss';

const MovieList = ({ movieList, location, searchQuerry }) => (
  <>
    <ul className="MovieList">
      {movieList.map(({ id, title }) => (
        <li key={id}>
          <Link
            className="MovieList__link"
            to={{
              pathname: `/movies/${id}`,
              state: {
                from: location,
              },
            }}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </>
);

export default withRouter(MovieList);
