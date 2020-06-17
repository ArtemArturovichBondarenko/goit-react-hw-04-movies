import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const activeStyle = {
  color: 'rgb(206, 56, 56)',
};

const Nav = () => (
  <ul className={styles.list}>
    <li className={styles.list_item}>
      <NavLink
        to="/"
        exact
        className={styles.nav_link}
        activeStyle={activeStyle}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/movies"
        className={styles.nav_link}
        activeStyle={activeStyle}
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Nav;
