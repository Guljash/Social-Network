import React from 'react';
import Post from './Post/Post';
import styles from './MyPosts.module.css';


const MyPosts = (props) => {

  const postElements = props.pd.map(el => (<Post message={el.message} />))

  return (
    <div className={styles.container}>
      <h1>My posts</h1>
      <div className={styles.inputForm}><textarea placeholder="Write your post here" /><button>Write</button></div>
      <div>
        {postElements}
      </div>
    </div>
  );
}

export default MyPosts;