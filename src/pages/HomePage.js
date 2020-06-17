import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieApi from '../services/movies-api';

export default class HomePage extends Component {
  state = { movies: [] };

  componentDidMount() {
    movieApi
      .getHomePage()
      .then(({ data }) => this.setState({ movies: data.results }));
  }

  render() {
    const { movies } = this.state;
    const { location } = this.props;
    console.log(movies);
    return (
      <>
        <h2>Trending today</h2>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: location },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

HomePage.propTypes = {
  history: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
};
