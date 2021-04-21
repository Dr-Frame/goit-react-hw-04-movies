import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './Cast.scss';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { id } = this.props;
    const key = '3550330ecc32a34c7342dbd44dd96d6e';
    const requestLink = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`;

    const response = await axios.get(requestLink).then(({ data }) => data.cast);
    console.log(response);
    this.setState({
      cast: response.slice(0, 15),
    });
    window.scrollTo({
      top: 770,
      behavior: 'smooth',
    });

    console.dir(document.documentElement);
  }

  render() {
    const { cast } = this.state;
    console.log(this.props);
    return (
      <div className="Cast">
        <ul className="Cast__list">
          {cast.map(({ name, character, profile_path, id }) => (
            <li key={id} className="Cast__item">
              {profile_path && (
                <img
                  className="Cast__img"
                  src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                  alt={name}
                ></img>
              )}
              <h4 className="Cast__name">{name}</h4>
              <p className="Cast__char">
                <span>Character:</span> {character}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(Cast);
