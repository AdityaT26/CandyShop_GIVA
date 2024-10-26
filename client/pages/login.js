// pages/login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      localStorage.setItem('token', response.data.token); // Save token
      router.push('/admin/manage'); // Redirect to manage page after login
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary text-highlight">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-bold">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          className="border p-2 w-full mb-2" 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="border p-2 w-full mb-2" 
        />
        <button onClick={handleLogin} className="bg-blue-500 text-white p-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
