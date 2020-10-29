import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileHeader from './ProfileHeader/ProfileHeader';

const Profile = (props) => {
  return (
    <div>
      <ProfileHeader />
      <MyPostsContainer store={props.store} />
    </div>
  );
}

export default Profile;