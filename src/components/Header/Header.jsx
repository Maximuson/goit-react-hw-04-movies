import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
const Header = () => {
  return (
    <div className={styles.header}>
      <NavLink
        exact
        to="/"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Movies
      </NavLink>
    </div>
  );
};

export default Header;
