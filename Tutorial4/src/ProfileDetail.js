import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProfileDetail() {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const response = await fetch(`https://express-t4.onrender.com/api/users/${id}`);
        const data = await response.json();
        setUser(data);
      } catch {
        console.error('Error fetching user detail');
      }
    };
    fetchUserDetail();
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="user-detail">
      {user.picture && <img src={user.picture} alt={user.name} />}
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Address: {user.address}</p>
      <p>Age: {user.age}</p>
      <p>Eye Color: {user.eyeColor}</p>
      <p>Gender: {user.gender}</p>
      <p>Company: {user.company}</p>
      <p>Balance: {user.balance}</p>
      <p>Greeting: {user.greeting}</p>
      <h3>Friends:</h3>
      <ul>
        {user.friends.map(friend => (
          <li key={friend.id}>{friend.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileDetail;
