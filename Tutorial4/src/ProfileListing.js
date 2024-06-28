import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProfileListing() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://express-t4.onrender.com/api/users');
        const data = await response.json();
        setUsers(data);
      } catch {
        setError('Failed to load users. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="user-grid">
        {filteredUsers.map(user => (
          <Link to={`/profile/${user._id}`} key={user._id}>
            <div className="user-card">
              {user.picture && <img src={user.picture} alt={user.name} />}
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Balance: {user.balance}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProfileListing;
