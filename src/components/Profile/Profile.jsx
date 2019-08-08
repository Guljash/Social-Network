import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileHeader from './ProfileHeader/ProfileHeader';

const Profile = (props) => {
  return (
    <div>
      <ProfileHeader />
      <MyPosts pd={props.pd}/>
    </div>
  );
}

export default Profile;