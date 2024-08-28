import {useEffect, useRef, useState} from 'react'
import meter95 from "../assets/img/meter95.svg"
import meter90 from "../assets/img/meter90.svg"
import meter80 from "../assets/img/meter80.svg"
import "../styles/skills.css"
import { useReducer } from "react"

function Skills() {
    const carouselRef = useRef(null);
    const scrollStepRef = useRef(1);
    useEffect(() => {
        const carousel = carouselRef.current;
        const loopScroll = () => {
          if (carousel.scrollLeft >= (carousel.scrollWidth - carousel.clientWidth -10 ) ) {
            scrollStepRef.current = -1;
          } else if (carousel.scrollLeft <= 0) {
            scrollStepRef.current = 1;
          }
          carousel.scrollLeft += scrollStepRef.current;
        };
      
        const intervalId = setInterval(loopScroll, 20); // Adjust the interval for speed
      
        return () => clearInterval(intervalId); // Cleanup interval on component unmount
      }, []);
  return (
    <section className="skill">
            <h3 className='py-2'>SKILLS</h3>
            <p className='skill-text py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
            <div className="custom-carousel" ref={carouselRef}>
                <div className="custom-carousel-item"><img src={meter90}/>
                <h5>Web Development</h5></div>
                <div className="custom-carousel-item"><img src={meter95}/>
                <h5>DSA</h5></div>
                <div className="custom-carousel-item"><img src={meter95}/>
                <h5>Java</h5></div>
                <div className="custom-carousel-item"><img src={meter80}/>
                <h5>Matlab</h5></div>
                <div className="custom-carousel-item"><img src={meter90}/>
                <h5>Django</h5></div>
                <div className="custom-carousel-item"><img src={meter80}/>
                <h5>Rest framework</h5></div>
                <div className="custom-carousel-item"><img src={meter90}/>
                <h5>React</h5></div>
                <div className="custom-carousel-item"><img src={meter90}/>
                <h5>Web Development</h5></div>
                <div className="custom-carousel-item"><img src={meter95}/>
                <h5>DSA</h5></div>
            </div>
    </section>
    // <><h1>SKILLS</h1></>
  )
}

export default Skills