import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileHeader from './ProfileHeader/ProfileHeader';

const Profile = (props) => {
  return (
    <div>
      <ProfileHeader />
      <MyPosts state={props.state.postData} addPost={props.addPost}/>
    </div>
  );
}

export default Profile;