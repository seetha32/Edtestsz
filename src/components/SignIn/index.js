import React, { useState } from 'react';
import axios from 'axios';

const SignIn = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/signin', { username, password });
      localStorage.setItem('token', response.data.token);
      history.push('/booking');
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
