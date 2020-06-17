import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBar from '../../components/SearchBar/SearchBar';
import * as movieApi from '../../services/movies-api';
import styles from './MoviesPage.module.css';

export default class MoviesPage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search).get('query');

    if (!query) {
      return;
    }
    movieApi.getMoviesSearch(query).then(({ data }) => {
      this.setState({ movies: data.results });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = new URLSearchParams(prevProps.location.search).get(
      'query',
    );
    const nextQuery = new URLSearchParams(this.props.location.search).get(
      'query',
    );
    if (prevQuery === nextQuery) {
      return;
    }
    movieApi.getMoviesSearch(nextQuery).then(({ data }) => {
      this.setState({ movies: data.results });
    });
  }

  setSearchQuery = searchQuery => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${searchQuery}`,
    });
  };

  render() {
    const { movies } = this.state;
    const { location } = this.props;
    console.log(movies);
    return (
      <>
        <SearchBar onSearch={this.setSearchQuery} />
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
MoviesPage.propTypes = {
  history: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
};
