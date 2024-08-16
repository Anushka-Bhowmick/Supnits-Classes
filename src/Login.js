import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiLock } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "your_username" && password === "your_password") {
      alert("Login successful!");
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  const handleToggleSignUp = () => {
    document.getElementById("login-form").style.transform = "translateX(-100%)";
  };

  return (
    <div className="center-container bg-primary text-white">
      <div id="login-form" className="login-form bg-light p-4 rounded">
        <div className="login-field">
          <label htmlFor="username" className="login-icon">
            <FiUser />
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
            placeholder="Username"
            required
          />
        </div>

        <div className="login-field">
          <label htmlFor="password" className="login-icon">
            <FiLock />
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            placeholder="Password"
            required
          />
        </div>

        <button
          type="button"
          onClick={handleLogin}
          className="login-submit btn btn-secondary"
        >
          Login <span className="button-icon">→</span>
        </button>

        <div className="signup-link">
          <p>
            <Link to="/signup" onClick={handleToggleSignUp}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
