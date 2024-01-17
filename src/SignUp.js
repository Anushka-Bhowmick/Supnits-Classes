import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiPhone, FiMail, FiLock } from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './SignUp.css';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    alert('Sign Up successful!');
  };

  const handleToggleLogin = () => {
    document.getElementById('signup-form').style.transform = 'translateX(100%)';
  };

  return (
    <div className="center-container bg-primary text-white">
      <div id="signup-form" className="signup-form bg-light p-4 rounded">
        <div className="signup-field">
          <label htmlFor="fullName" className="signup-icon">
            <FiUser />
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="signup-input"
            placeholder="Full Name"
            required
          />
        </div>

        <div className="signup-field">
          <label htmlFor="mobileNumber" className="signup-icon">
            <FiPhone />
          </label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="signup-input"
            placeholder="Mobile Number"
            required
          />
        </div>

        <div className="signup-field">
          <label htmlFor="email" className="signup-icon">
            <FiMail />
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signup-input"
            placeholder="Email"
            required
          />
        </div>

        <div className="signup-field">
          <label htmlFor="password" className="signup-icon">
            <FiLock />
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signup-input"
            placeholder="Password"
            required
          />
        </div>

        <button type="button" onClick={handleSignUp} className="signup-submit btn btn-secondary">
          Sign Up <span className="button-icon">→</span>
        </button>

        <div className="login-link">
          <p>
            <Link to="/login" onClick={handleToggleLogin}>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
