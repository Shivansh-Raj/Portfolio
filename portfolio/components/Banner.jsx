import {useEffect, useState} from 'react'
import "../styles/banner.css"
import headerImg from "../assets/img/banner-img.png"
import { Link } from 'react-scroll';
function Banner() {
    const [loopnum, setLoopnum] = useState(0);
    const [isdeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(150);
    const toRotate = ['Tech Enthusiast ','Web Developer ','Web Designer ','Data Analyst ']
    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        },delta);
        return () => clearInterval(ticker);
    },[text]);

    const tick = () => {
        let content = toRotate[loopnum];
        // let isdeletingSpeed = isdeleting ? 150 : 250;
        let updatedText = isdeleting ? content.substring(0, text.length - 1) : content.substring(0, text.length + 1);
        setText(updatedText);
        // console.log(text);
        if (isdeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(150);
            setLoopnum((loopnum+1)%toRotate.length);
        } else if(isdeleting && updatedText.length < content.length) {
            // setIsDeleting(true);
            setDelta(50);
        } else if(!isdeleting && updatedText === content) {
            setIsDeleting(true);
            setDelta(500);
        } 
    }
  return (
    <div className="container text-center banner-container">
        <div className="row align-items-center">
            <div className="col-md-6 banner-text">
                <span className='welcome-text'>Welcome to my Portfolio!!</span><br/>
                <span className='dynamic-text'>I'm a {text}!</span>
                <br/>
                <Link to="aboutme" smooth={true} duration={500} offset={-100}><button className="about-me-btn">About Me!</button></Link>
            </div>
            <div className="col-md-5 banner-img">
                {/* <img src={headerImg2}/> */}
                <img src={headerImg} alt="Cyberpunk GIF"/>
            </div>
        </div>
    </div>

  )
}

export default Banner;


