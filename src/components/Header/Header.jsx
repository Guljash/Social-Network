import React from 'react';
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="https://sap.github.io/ui5-webcomponents/images/react.svg" alt="logo"/>
      <span>JsPower!</span>
    </header>
  );
}

export default Header;