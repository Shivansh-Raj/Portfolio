import React, { useEffect, useRef } from 'react';
import "../styles/cyberLine.css";

function Cyberline() {
  const lineref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
                //  else {
                //     entry.target.classList.remove('active');
                // }
            });
        },
        {threshold : 0.1}
    )
    if (lineref.current) {
        observer.observe(lineref.current)
    }
    return () => {
        if (lineref.current) {
            observer.unobserve(lineref.current)
        }
    }

  },[])

    return (
    <div className="line-container" ref={lineref}>
        <div className="animated-line"></div>
    </div>
    )
}

export default Cyberline;
