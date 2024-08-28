import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Skills from '../components/Skills'
import Cyberline from '../components/Cyberline'
import Projects from '../components/Projects'
import Contact from '../components/contact'
import AboutMe from '../components/AboutMe'
import SocialMedia from '../components/SocialMedia'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div id ="banner">
        <Banner />
      </div>
      <SocialMedia/>
      <div id = "aboutme">
        <Cyberline/>
        <AboutMe/>
      </div>
      <div id="skills">
        <Skills/>
      </div>
      <div id="projects">
        <Projects/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
    </>
  )
}

export default App
