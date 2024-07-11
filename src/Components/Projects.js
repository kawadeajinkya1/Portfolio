import React, { useState, useEffect } from 'react';
import "./Projects.css";
import Fade from 'react-reveal/Fade';
import A from  "./../Assests/bharat.png";
import B from "./../Assests/ambio.png";
import D from "./../Assests/kprs.png";
import C from "./../Assests/cortica.png";
import G from "./../Assests/ste.png";
import E from "./../Assests/balaji.png";
import F from "./../Assests/primezone.png";
import Nav from "./Nav";

const Slider = ({id}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [A, B, D, C, G, E, F];
  
  const links = [
    'https://bharattelecompune.com/',
    'https://www.ambionicsindia.com/',
    'http://kprspumps.in/',
    'https://corticawebsolutions.com/',
    'https://sachintoolsengineering.com/',
    'https://pebconstruction.in/',
    'https://primezonecs.com/',
  
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const updateSlider = () => {
    const translateValue = -currentIndex * 100;
    return { transform: `translateX(${translateValue}%)` };
  };

  return (
    <div>

      <Nav />
    <div className="container" id={id}><Fade left>
    <div className="slider-container">
      <center><h4 className='head'>MY PROJECTS</h4></center>
      <br />
      <div className="slider" style={updateSlider()}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <a href={links[index]} className="slide-link" target="_blank" rel="noopener noreferrer">
              <img src={image} alt={`Slide ${index + 1}`} />
            </a>
          </div>
        ))}
      </div>
    </div></Fade></div>

    </div>
  );
};

export default Slider;
