import { NavLink } from 'react-router-dom';
import React from 'react';
import styles from '../AuthNav/AuthNav.module.css';

const AuthNav = () => (
  <div>
    <NavLink to="/register" className={styles.link}>
      Sign Up
    </NavLink>
    <NavLink to="/login" className={styles.link}>
      Log In
    </NavLink>
  </div>
);

export default AuthNav;
