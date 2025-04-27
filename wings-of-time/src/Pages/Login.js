import React, { useState } from 'react';
import '../Styles/LoginPage.css';
import backgroundVideo from '../Sources/background.mp4';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  


  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  

  return (
    <div className="login-page">
    <video id="bg-video" autoPlay muted loop playsInline>
    <source src={backgroundVideo} type="video/mp4"></source>
    Your browser does not support the video tag.
  </video>

      <div className="login-container">
        <h1>Login</h1>

        <div className="input-box">
          <span className="icon">👤</span>
          <input type="text" placeholder="Username" />
        </div>

        <div className="input-box">
          <span className="icon">🔒</span>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
          />
          <span className="show" onClick={togglePassword}>
            {showPassword ? 'HIDE' : 'SHOW'}
          </span>
        </div>

        <hr className="divider" />

        <div className="buttons">
          <button className="signup-btn">Sign Up</button>
          <span className="or">OR</span>
          <button className="login-btn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
