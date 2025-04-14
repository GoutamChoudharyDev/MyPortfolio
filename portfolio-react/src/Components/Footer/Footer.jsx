import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer className="footer" id='footer'>
            <div className="footer-top">
                <div className="footer-brand">
                    <h2><span className="color-text">GOUTAM</span> | Frontend Developer</h2>
                    <p>Turning ideas into interactive experiences through clean and efficient code.</p>
                </div>

                <ul className="footer-links">
                    <li>Home</li>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>

                <div className="footer-socials">
                    <a href="https://www.linkedin.com/in/goutam-choudhary-953339292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/GoutamChoudharyDev" target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="mailto:rc.goutam.choudhary@gmail.com">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
            </div>

            <hr />

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Goutam Choudhary. All Rights Reserved.</p>
                <p>Designed & Built with 💜 using React.js</p>
            </div>
        </footer>
    );
};

export default Footer;
