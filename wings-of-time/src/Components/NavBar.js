import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navbar = {
    position: 'absolute',
    top: '12px',
    left: isMobile ? '12px' : '50%',
    transform: isMobile ? 'none' : 'translateX(-50%)',
    background: 'rgba(255, 255, 255, 0.75)',
    padding: isMobile ? '10px' : '10px',
    display: isMobile ? 'block' : 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'center',
    gap: isMobile ? '0px' : '120px',
    borderRadius: '30px',
    width: isMobile ? 'fit-content' : '65%',
    zIndex: 10,
  };

  const navBtn = {
    backgroundColor: 'rgba(175, 219, 255, 0.98)',
    border: 'none',
    padding: isMobile ? '8px 15px' : '10px 25px',
    fontSize: isMobile ? '14px' : '18px',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: 'bold',
    letterSpacing: '1px',
    margin: '5px 0',
    display: isMobile && !menuOpen ? 'none' : 'block',
  };

  const hamburgerBtn = {
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    display: isMobile ? 'block' : 'none',
    marginBottom: '10px',
    fontWeight: 'bold'
  };

  return (
    <div>
      <nav style={navbar}>
        {isMobile && (
          <button style={hamburgerBtn} onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        )}
        <Link to="/Home" style={{textDecoration:'None'}}><button style={navBtn}>Home</button></Link>
        <Link to="/Search" style={{textDecoration:'None'}}><button style={navBtn}>Search</button></Link>
        <Link to="/About" style={{textDecoration:'None'}}><button style={navBtn}>About</button></Link>
       <Link to="/Help" style={{textDecoration:'None'}}><button style={navBtn}>Help</button></Link> 
      </nav>
    </div>
  );
}
