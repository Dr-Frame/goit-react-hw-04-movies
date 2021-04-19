import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Reviews.scss';
import axios from 'axios';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { id } = this.props;
    const key = '3550330ecc32a34c7342dbd44dd96d6e';
    const requestLink = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`;
    const response = await axios
      .get(requestLink)
      .then(({ data }) => data.results);
    console.log(response);

    this.setState({
      reviews: response,
    });
    window.scrollTo({
      top: 770,
      behavior: 'smooth',
    });
  }

  render() {
    console.log(this.props);
    const { reviews } = this.state;
    return (
      <div className="Reviews">
        <ul className="Reviews__list">
          {reviews.map(({ id, author, content }) => (
            <li key={id} className="Reviews__item">
              <h2 className="Reviews__author">
                Author: <span>{author}</span>
              </h2>
              <p className="Reviews__descr">{content}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(Reviews);
