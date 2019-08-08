import React from 'react';
import styles from './ProfileHeader.module.css';
import Avatar from './Avatar/Avatar';

const ProfileHeader = () => {
  return (
    <div className={styles.container}>
      <Avatar />
      <span className={styles.name}>George Antonov</span>
    </div>
  );
}

export default ProfileHeader;