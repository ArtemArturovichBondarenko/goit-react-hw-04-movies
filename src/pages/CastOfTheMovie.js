import React, { Component } from 'react';
import * as movieApi from '../services/movies-api';

export default class CastOfTheMovie extends Component {
  state = { actors: [] };

  componentDidMount() {
    movieApi
      .getMovieCredits(this.props.match.params.movieId)
      .then(({ data }) => this.setState({ actors: data.cast }));
  }
  render() {
    const { actors } = this.state;

    return (
      <div>
        <ul>
          {actors.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
              />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
