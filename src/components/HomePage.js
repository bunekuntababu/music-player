import React, { useState } from 'react';
import './HomePage.css';  // Custom styles for HomePage

const HomePage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (username === "Username" && password === "Password") {
      onLogin();  
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    
    <div className="home-page">
      <div className="overlay">
      
        <div className="content">
          <h1>Welcome to Bunekunta Babu Sangeeth</h1>
          <p>Please login to play the music player</p>

          {/* Login Form */}
          <form onSubmit={handleLoginSubmit} className="login-form">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Log In</button>
            <div className='create'>
              Created by <strong>@Bunekunta Babu</strong>21221
            </div>
          </form>

          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
