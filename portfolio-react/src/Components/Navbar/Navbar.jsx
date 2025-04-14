import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='navbar'>
            <div className="nav-logo"><span className='color-text'>GOUTAM</span></div>
            
            <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
                <li>Home</li>
                <li>About Me</li>
                <li>My Work</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </div>
            
            <div className="nav-connect">Connect With Me</div>

            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <div className={`bar ${menuOpen ? "rotate1" : ""}`}></div>
                <div className={`bar ${menuOpen ? "hide" : ""}`}></div>
                <div className={`bar ${menuOpen ? "rotate2" : ""}`}></div>
            </div>
        </div>
    );
};

export default Navbar;
