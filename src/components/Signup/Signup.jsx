import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

function Signup({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data); // Handle signup success or failure
  };

  return (
    <div className="signup-container">
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <div className="forgot-password">
          <div className="to-right">
          <p>Already a user?</p>
          <Link to={"/login"}>Login</Link>
          </div>
        </div>
        <button type="submit">Signup</button>
      </form>
      <div className="signup-options">
        <p>Or signup with:</p>
        <div className="social-signup">
          <button className="google">Google</button>
          <button className="facebook">Facebook</button>
          <button className="linkedin">LinkedIn</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
