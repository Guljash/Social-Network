import React from 'react';
import styles from './Message.module.css';

const Message = (props) => {
  return (
    <div className={(props.isMyMessage) ? styles.myMessage : styles.message}>{props.text}</div>
  )
}

export default Message;