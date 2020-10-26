import React from 'react';
import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { changeMessageTextActionCreator, addMessageActionCreator } from './../../redux/dialogsReducer'

const Dialogs = (props) => {

  const dialogsElements = props.state.dialogsData.map(el => (<Dialog state={el} path={props.state.dialogsData} dispatch={props.dispatch} />))

  const messagesElements = props.state.messageData.map(el => (<Message text={el.text} id={el.id} isMyMessage={el.isMyMessage} />))

  const onMessageChange = (e) => {
    let text = e.target.value;
    props.dispatch(changeMessageTextActionCreator(text));
  }

  const addMessage = () => {
    props.dispatch(addMessageActionCreator());
  }

  return (
    <div className={styles.dialogs}>
      <div>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        <div className={styles.messagesInput}>
          <textarea onChange={onMessageChange} value={props.state.newMessageText} className={styles.textarea} placeholder="Write your message here" />
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