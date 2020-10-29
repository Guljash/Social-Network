import React from 'react';
import styles from './Header.module.css'
import pic from './reacdux.png'

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={pic} alt="logo"/>
      <span>React + Redux</span>
    </header>
  );
}

export default Header;