import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'

const Hero = () => {
    return (
        <div className='hero'>
            <img src={profile_img} alt="profileimg" />
            <h1><span className='color-text'>I'm Goutam Choudhary,</span> frontend developer based in INDIA.</h1>
            <p>I am frontend developer, Experties in  HTML, CSS, Javascript, React.js, Bootstrap</p>
            <div className="hero-action">
                <div className="hero-connect">Connect With Me</div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}

export default Hero
