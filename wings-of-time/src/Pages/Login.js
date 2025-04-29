import React, { useState, useRef } from 'react';
import '../Styles/LoginPage.css';
import backgroundVideo from '../Sources/background.mp4';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const userInputRef = useRef(null)
  const userPassRef = useRef(null)
  const [login,setLogin] = useState("")
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
   function handleLogin(){
     if(userInputRef){
       if (userPassRef){
         setLogin("/GetStarted")
       }
       else{
        alert("Wrong Password")
       }
     }
     else{
      alert("wrong Username")
     }
    
   }
  

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
          <input type="text" placeholder="Username" ref={userInputRef}/>
        </div>

        <div className="input-box">
          <span className="icon">🔒</span>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password" ref={userPassRef}
          />
          <span className="show" onClick={togglePassword}>
            {showPassword ? 'HIDE' : 'SHOW'}
          </span>
        </div>

        <hr className="divider" />

        <div className="buttons">
          <button className="signup-btn">Sign Up</button>
          <span className="or">OR</span>
          <Link href={login} onClick={handleLogin}><button className="login-btn">Login</button></Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
