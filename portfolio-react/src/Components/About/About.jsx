import React from 'react'
import './About.css'
import './AboutMQ.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_img from '../../assets/about_img.jpg'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="themepattern" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={about_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p> I'm a passionate Frontend Developer with a strong foundation in crafting responsive, user-centric web interfaces.</p>
                        <p> I love collaborating with teams to bring ideas to life and constantly stay updated with the latest trends in frontend technologies.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p> <hr style={{ width: "65%" }} /></div>
                        <div className="about-skill"><p>React JS</p> <hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p> <hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>Bootstrap</p> <hr style={{ width: "55%" }} /></div>
                        <div className="about-skill"><p>M. L</p> <hr style={{ width: "47%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>PROJECTS</h1>
                    <ul>
                        <li>Tour & Travel Website[MERN]</li>
                        <li>Quiz App[Reactjs]</li>
                        <li>To-Do-App[Reactjs]</li>
                        <li>Personal Portfolio[Reactjs]</li>
                    </ul>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>CERTIFICATES</h1>
                    <ul>
                        <li>Microsoft Azure AI fundamentals</li>
                        <li>Google Developer Student Club</li>
                        <li>Core & Advandced Java Technologies</li>
                    </ul>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>ACADEMIC</h1>
                    <ul>
                        <li>Pursuing Btech in C.S.E</li>
                        <li>Class XII with 78% Score</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About

