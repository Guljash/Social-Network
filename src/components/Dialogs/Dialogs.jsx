import React from 'react';
import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {

  const dialogsElements = props.dialogsPage.dialogsData.map(el => (<Dialog state={el} key={el.id} setActive={props.setActive} />))

  const messagesElements = props.dialogsPage.messageData.map(el => (<Message text={el.text} key={el.id} isMyMessage={el.isMyMessage} />))

  const onMessageChange = (e) => {
    let text = e.target.value;
    props.onMessageChange(text);
  }

  const addMessage = () => {
    props.addMessage();
  }

  return (
    <div className={styles.dialogs}>
      <div>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        <div className={styles.messagesInput}>
          <textarea onChange={onMessageChange} value={props.dialogsPage.newMessageText} className={styles.textarea} placeholder="Write your message here" />
          <button onClick={addMessage} >Send</button>
        </div>
        <div className={styles.messagesBox}>
          {messagesElements}
        </div>
      </div>
    </div>
  );
}

export default Dialogs;