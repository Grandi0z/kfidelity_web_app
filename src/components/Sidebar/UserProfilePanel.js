import React from 'react';
import userImage from '../../assets/dist/img/user2-160x160.jpg'; // Adjust the path as per your project structure

const UserProfilePanel = () => {
  return (
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src={userImage} className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="profile.html" className="d-block" id="usernameName"></a>
      </div>
    </div>
  );
};

export default UserProfilePanel;
