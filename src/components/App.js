import React, { lazy, Suspense, Component } from 'react';

import { Route, Switch } from 'react-router-dom';
import Nav from './Nav/Nav';
import Loading from '../pages/Loading';

const HomePage = lazy(() => 
  import('../pages/HomePage' /*webpackChunkName: "home-page" */),
);

const MoviesPage = lazy(() =>
  import('../pages/MoviesPage/MoviesPage' /*webpackChunkName: "movies-page" */),
);

const MovieDetailsPage = lazy(() =>
  import(
    '../pages/MovieDetailsPage/MovieDetailsPage' /*webpackChunkName: "movie-details-page" */
  ),
);

const NotFound = lazy(() =>
  import('../pages/NotFound' /*webpackChunkName: "not-found" */),
);

class App extends Component {
  state = {
    value: '',
    box: [],
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        <Nav />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/movies/:movieId" component={MovieDetailsPage} />
            <Route path="/movies" component={MoviesPage} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
