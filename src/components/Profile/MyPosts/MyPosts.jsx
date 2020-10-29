import React from 'react';
import Post from './Post/Post';
import styles from './MyPosts.module.css';


const MyPosts = (props) => {

  const postElements = props.profilePage.postData.map(el => (<Post key={el.id} message={el.message} />))

  const onAddPost = () => {
    props.addPost()
    // props.dispatch({ type: 'ADD_POST' });
  }

  const onPostChange = (e) => {
    let text = e.target.value;
    props.changeText(text)
  }

  return (
    <div className={styles.container}>
      <h1>My posts</h1>
      <div className={styles.inputForm}>
        <div>
          <textarea onChange={onPostChange} placeholder="Type something..." className={styles.textarea} value={props.profilePage.newPostText}></textarea>
        </div>
        <div className={styles.buttonWrapper}>
          <button onClick={onAddPost}>Write</button>
        </div>
      </div>
      <div>
        {postElements}
      </div>
    </div>
  );
}

export default MyPosts;
