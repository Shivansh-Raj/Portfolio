import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll';
// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../styles/navbar.css"
import navicon1 from "../assets/img/nav-icon1.svg"
import navicon2 from "../assets/img/telegram.png"
import navicon3 from "../assets/img/nav-icon3.svg"
import dropDown from "../assets/img/dropdown.png"

function Navbar() {
  const [activelink, setActivelink] = useState('home');
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
        if (window.scrollY > 50) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }
    window.addEventListener("scroll", onScroll );
    return () => window.removeEventListener("scroll", onScroll);
  },[])

  const UpdateActivelink = (value) => {
    setActivelink(value);
  }
  return (
    <nav className={`navbar navbar-expand-lg ${scroll?"scrolled" :""}`} >
        <div className="container-fluid">
            <h4 className="nav-item" href="#">CYBERPUNK</h4>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><img src={dropDown}/></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link to="banner" smooth={true} duration={500} className={`${activelink === "home"?"nav-link active":"nav-link"}`} aria-current="page" onClick = {() => UpdateActivelink("home")}>Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="skills" smooth={true} duration={500} offset={-100} className={`${activelink === "skills"?"nav-link active":"nav-link"}`} onClick = {() => UpdateActivelink("skills")}>Skills</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="projects" smooth={true} duration={500} offset={-100}  className={`${activelink === "projects"?"nav-link active":"nav-link"}`}  onClick = {() => UpdateActivelink("projects")}>Project</Link>
                    </li>
                    <li className="nav-item socialLink">
                    <a href ="https://www.linkedin.com/in/shivanshrajdehl" target="_blank"><img className="" src={navicon1} alt=""/></a>
                    </li>
                    <li className="nav-item socialLink ">
                    <img className="" src={navicon2} alt=""/>
                    </li>
                    <li className="nav-item socialLink">
                    <a href="https://www.instagram.com/shivansh._.raj/" target='_blank'><img className=" " src={navicon3} alt=""/></a>
                    </li>
                    <li className="nav-item  connect-btn animated-bg">
                    <Link to="contact" smooth={true} duration={500} offset={0}><button className="btn border">Let's Connect!</button></Link>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
  )
}

export default Navbar