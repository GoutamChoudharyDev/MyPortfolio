import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='navbar'>
            <div className="nav-logo"><span className='color-text'>GOUTAM</span></div>

            <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
                <li><Link to="home" smooth={true} duration={700} className="anchor-link">
                    Home
                </Link></li>
                <li><Link to="about" smooth={true} duration={700} offset={-50} className="anchor-link">
                    About Me
                </Link></li>
                <li><Link to="work" smooth={true} duration={700} offset={-50} className="anchor-link">
                    My Work
                </Link></li>
                <li><Link to="contact" smooth={true} duration={700} offset={-50} className="anchor-link">
                    Contact
                </Link></li>
                <li><Link to="footer" smooth={true} duration={700} offset={-50} className="anchor-link">
                    Portfolio
                </Link></li>
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
