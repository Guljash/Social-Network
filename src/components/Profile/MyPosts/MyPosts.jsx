import React from 'react';
import Post from './Post/Post';
import styles from './MyPosts.module.css';


const MyPosts = (props) => {

  const postElements = props.state.postData.map(el => (<Post message={el.message} />))

  let newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch({ type: 'ADD_POST' });
    props.dispatch({ type: 'CHANGE_TEXT', text: '' });
  }

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({ type: 'CHANGE_TEXT', text: text });
  }

  return (
    <div className={styles.container}>
      <h1>My posts</h1>
      <div className={styles.inputForm}>
        <div>
          <textarea onChange={onPostChange} placeholder="Type something..." ref={newPostElement} className={styles.textarea} value={props.state.newPostText}></textarea>
        </div>
        <div className={styles.buttonWrapper}>
          <button onClick={addPost}>Write</button>
        </div>
      </div>
      <div>
        {postElements}
      </div>
    </div>
  );
}

export default MyPosts;