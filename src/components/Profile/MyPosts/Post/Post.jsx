import React from 'react';
import styles from './Post.module.css'


const Post = (props) => {
  return (
    <div className={styles.post}>
      <img src="https://pp.userapi.com/c850432/v850432586/b2401/SzPcA6bq5lY.jpg" alt="avatar"/>
      <p>{props.message}</p>
    </div>
  );
}

export default Post;