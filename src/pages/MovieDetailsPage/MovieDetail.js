import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import style from './MovieDetail.module.css';

const MovieDetail = ({
  poster_path,
  title,
  release_date,
  vote_average,
  overview,
  genres,
  id,
  onGoBack,
  location,
  history
}) => (
  <>
    <button type="button" onClick={onGoBack} className={style.button}>
      Go Back
    </button>
    <section className={style.section}>
      <img
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt={title}
        className={style.img}
      />
      <div className={style.div}>
        <h2>
          {title} ({release_date.slice(0, 4)})
        </h2>
        <p>User Score {vote_average * 10}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul className={style.ul}>
          {genres.map(genre => (
            <li key={genre.id} className={style.li}>
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
      <div className={style.additional}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link 
              to={{
                pathname: `/movies/${id}/cast`,
                state: { from: location },
              }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `/movies/${id}/reviews`,
                state: { from: location },
              }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </section>
  </>
);

export default MovieDetail;
