import React from 'react';

const ProfilePage = () => {
  const profile = JSON.parse(localStorage.getItem('profile'));

  if (!profile) {
    return <p>No profile data found. Please register first.</p>;
  }

  return (
    <div className="container">
      <h2>Profile Page</h2>
      <p><strong>First Name:</strong> {profile.firstName}</p>
      <p><strong>Last Name:</strong> {profile.lastName}</p>
      <p><strong>Email:</strong> {profile.email}</p>
    </div>
  );
};

export default ProfilePage;
