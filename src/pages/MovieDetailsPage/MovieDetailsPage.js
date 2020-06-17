import React, { Component, lazy, Suspense } from 'react';
import MovieDetail from './MovieDetail';
import { Route } from 'react-router-dom';
import Loading from '../../pages/Loading';

import * as movieApi from '../../services/movies-api';

const CastOfTheMovie = lazy(() =>
  import('../CastOfTheMovie' /*webpackChunkName: "cast-of-the-movie" */),
);
const MovieReview = lazy(() =>
  import('../MovieReview' /*webpackChunkName: "movie-review" */),
);

export default class MovieDetailsPage extends Component {
  state = { movie: null };

  componentDidMount() {
    movieApi
      .getMovieDetails(this.props.match.params.movieId)
      .then(({ data }) => this.setState({ movie: data }));
  }

  handleGoBack = () => {
    const { history, location } = this.props;

    if (location.state) {
      return history.push(location.state.from);
    }

    history.push('/');
  };

  render() {
    const { movie } = this.state;
    return (
      <>
        {movie && (
          <MovieDetail
            location={this.props.location}
            {...movie}
            onGoBack={this.handleGoBack}
          />
        )}
        <Suspense fallback={<Loading />}>
          <Route path="/movies/:movieId/cast" component={CastOfTheMovie} />
          <Route path="/movies/:movieId/reviews" component={MovieReview} />
        </Suspense>
      </>
    );
  }
}
