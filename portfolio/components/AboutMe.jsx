import React from 'react';
import "../styles/aboutme.css";
import profilePic from "../assets/img/header-img.svg"; // Make sure to add your profile image here

function AboutMe() {
    return (
        <section className="about-me-section">
            <div className="about-me-container">
                <div className="about-me-text">
                    <h2 className="about-me-title">About Me</h2>
                    <p className="about-me-description">
                        Hey there! I'm Shivansh Rajdehl, a tech enthusiast with a passion for building innovative digital experiences. 
                        From full-stack web development to dabbling in AI, my journey in tech has been thrilling. 
                        When I’m not coding, I’m probably gaming, watching anime, or diving into the latest sci-fi novel. 
                        I love the cyberpunk aesthetic, and I'm fascinated by the intersection of technology and creativity.
                    </p>
                    <h3>Hobbies & Interests</h3>
                    <ul className="hobbies-list">
                        <li>Gaming & E-sports</li>
                        <li>Anime & Manga Fan</li>
                        <li>Tech Enthusiast</li>
                        <li>Exploring New Tech Gadgets</li>
                        <li>Reading Novels</li>
                    </ul>
                </div>
                <div className="about-me-image">
                    <img src={profilePic} alt="Profile" className="profile-image"/>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
