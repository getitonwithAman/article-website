import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false); // State to toggle Forgot Password

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data); // Handle login success or failure
  };

  const handleForgotPassword = () => {
    setForgotPassword(true);
    // Implement logic to handle forgot password (e.g., send email or redirect to forgot password page)
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
        <div className="forgot-password">
          <div className="to-right">
          <p>Not registerd yet?</p>
          <Link to={"/signup"}>Signup</Link>
          </div>
          <span onClick={handleForgotPassword}>Forgot Password?</span>
        </div>
        <button type="submit">Login</button>
      </form>
      {forgotPassword && (
        <div className="forgot-password-modal">
          {/* Implement your Forgot Password UI or logic here */}
          <p>Forgot Password modal or component</p>
          <button onClick={() => setForgotPassword(false)}>Close</button>
        </div>
      )}
      
      {/* <button className="close-button" onClick={onClose}>×</button> */}
    </div>
  );
}

export default Login;
