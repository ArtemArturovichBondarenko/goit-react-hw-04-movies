import React, { Component } from 'react';
import * as movieApi from '../services/movies-api';

export default class MovieReview extends Component {
  state = { reviews: [] };

  componentDidMount() {
    movieApi
      .getMovieReviews(this.props.match.params.movieId)
      .then(({ data }) => this.setState({ reviews: data.results }));
  }

  render() {
    const { reviews } = this.state;

    return reviews.length > 0 ? (
      <div>
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <div>
        <p>We dont`t have any reviews for this movie</p>
      </div>
    );
  }
}
