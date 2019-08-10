import React from 'react';
import Post from './Post/Post';
import styles from './MyPosts.module.css';


const MyPosts = (props) => {

  const postElements = props.state.map(el => (<Post message={el.message} />))

  let newPostElement = React.createRef();

  const addPost = () => {
    let text = newPostElement.current.innerText;
    props.addPost(text);
    newPostElement.current.innerText = "";
  }

  return (
    <div className={styles.container}>
      <h1>My posts</h1>
      <div className={styles.inputForm}>
        <div>
          <div contenteditable="true" placeholder="Type something..." ref={newPostElement} className={styles.textarea}></div>
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