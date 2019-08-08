import React from 'react';
import styles from './Nav.module.css';
import { NavLink } from "react-router-dom"


const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><NavLink to="/Profile" activeClassName={styles.activeLink}>Profile</NavLink></li>
        <li><NavLink to="/Dialogs" activeClassName={styles.activeLink}>Messages</NavLink></li>
        <li>News</li>
        <li>Music</li>
        <li>Settings</li>
      </ul>
    </nav>
  );
}

export default Nav;