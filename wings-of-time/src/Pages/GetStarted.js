import React from 'react'
import backgroundVideo from '../Sources/background.mp4';
import { Link } from 'react-router-dom';
import ProfileI from '../Components/Profile.js';

const GetStarted = () => {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    fontFamily: 'Courier New, monospace',
  };

  const videoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  };

  
  const mainContentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '42px',      
    fontWeight: 'bold',
    marginBottom: '30px',
  };
  const centerLogoStyle = {
    width: '300px',
    height: '300px',
    borderRadius: '60%',
    backgroundColor: 'white',
    opacity: 0.7,        
    margin: '0 auto 20px',
  };

  const buttonStyle = {
    backgroundColor: '#49C5FF9C',
    opacity: 0.61,
    color: 'white',
    fontWeight: "bold",
    fontSize: '20px',
    padding: '14px 28px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontFamily: 'Courier New, monospace',
    boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
    marginTop: '30px',
  };

  return (
    <div style={containerStyle}>
      <video autoPlay muted loop playsInline style={videoStyle}>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <ProfileI/>

      <div style={mainContentStyle}>
        
        <h1 style={headingStyle}>Welcome To <br /> WingsOfTime</h1>
        <div style={centerLogoStyle}></div>
        <Link to='/Home'> <button style={buttonStyle}>Find your Flight..</button> </Link>
      </div>
    </div>
  );
};

export default GetStarted;
