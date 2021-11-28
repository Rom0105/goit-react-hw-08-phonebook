import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';
import authSelectors from '../../Redux/auth/auth-selectors';
import styles from '../Navigation/Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" className={styles.link}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={styles.link}>
          Phone book
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
