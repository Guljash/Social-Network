import React from 'react';
import styles from './Dialog.module.css';
import { NavLink } from "react-router-dom";

const Dialog = (props) => {

  return (
    <NavLink to={`/dialogs/${props.id}`}>
      <div className={styles.dialog}>{props.name}</div>
    </NavLink>
  );
}

export default Dialog;