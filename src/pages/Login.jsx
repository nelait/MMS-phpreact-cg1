import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={username} onChange={e => setUsername(e.target.value)} placeholder='Username' required />
      <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' required />
      <button type='submit'>Login</button>
    </form>
  );
};

export default Login;
