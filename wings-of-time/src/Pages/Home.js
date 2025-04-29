import React from 'react';
import Background from '../Components/Background';
import NavBar from '../Components/NavBar';
import Profile from '../Components/Profile';

function Home() {
  const styles = {
  
      wrapper: {
        position: 'relative',
        height: '100vh',
        width: '100vw',
        fontFamily: '"Courier New", Courier, monospace',
        overflow: 'hidden',
      },
    
      profile: {
        position: 'absolute',
        top: '20px',
        right: '30px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px',
        color: '#000',
        fontWeight: 600,
        zIndex: 10,
      },
    
      userCircle: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'white',
        opacity: 0.7,
        border: '2px solid #ccc',
        marginRight: '10px',
      },
    
      centerBox: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        padding: '10px',
        width: '90%',
        maxWidth: '600px',
      },
    
      input: {
        fontSize: '1.2rem',
        padding: '1rem',
        width: '100%',
        borderRadius: '50px',
        border: '3px solid rgba(73, 197, 255, 0.26)',
        outline: 'none',
        textAlign: 'center',
        marginBottom: '20px',
      },
    
      checkbox: {
        margin: '20px 0',
        fontSize: '14px',
        color: '#222',
      },
    
      submitBtn: {
        backgroundColor: 'rgba(73, 197, 255, 0.6)',
        padding: '15px 30px',
        fontSize: '1rem',
        borderRadius: '12px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
      },
    };

  return (
    <div style={styles.wrapper}>
      <Background/>
      <div className='Navbar'>
      <NavBar/>
      </div>
      

      <Profile/>


      <div style={styles.centerBox}>
        <input
          type="text"
          placeholder="Enter Your Ticket ID or PNR Number"
          style={styles.input}
        />
        <div style={styles.checkbox}>
          <input type="checkbox" id="confirm" />
          <label htmlFor="confirm"> To Confirm and save your Ticket ID</label>
        </div>
        <button style={styles.submitBtn}>Submit ID</button>
      </div>
    </div>
  );
};

export default Home;
