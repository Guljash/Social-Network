import React from 'react';
import styles from './Dialog.module.css';
import { NavLink } from "react-router-dom";
import { setActiveActionCreator } from '../../../redux/state';

const Dialog = (props) => {

  const setActive = () => {
    let id = props.state.id
    let path = props.path;
    props.dispatch(setActiveActionCreator(id, path));
  }

  return (
    <NavLink to={`/dialogs/${props.state.id}`}>
      <div onClick={setActive} className={props.state.isActive ? styles.active : styles.dialog}>{props.state.name}</div>
    </NavLink>
  );
}

export default Dialog;