import React from 'react';
import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {

  const dialogsElements = props.state.dialogsData.map(el => (<Dialog state={el} path={props.state.dialogsData} setActive={props.setActive} />))

  const messagesElements = props.state.messageData.map(el => (<Message text={el.text} id={el.id} isMyMessage={el.isMyMessage} />))

  return (
    <div className={styles.dialogs}>
      <div>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        <div className={styles.messagesInput}>
          <textarea className={styles.textarea} placeholder="Write your message here" />
          <button>Send</button>
        </div>
        <div className={styles.messagesBox}>
          {messagesElements}
        </div>
      </div>
    </div>
  );
}

export default Dialogs;