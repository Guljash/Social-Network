import React from 'react';
import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {

  const dialogsElements = props.dd.map(el => (<Dialog name={el.name} id={el.id} />))
  const messagesElements = props.md.map(el => (<Message text={el.text} id={el.id} />))

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsList}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
      </div>
    </div>
  );
}

export default Dialogs;