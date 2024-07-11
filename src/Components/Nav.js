import React from 'react';
import {  useEffect,useRef, useState } from "react";
import { Link } from "react-router-dom";
import './Nav.css';


const Nav = () => {

  const [burger,setBurger]=useState(false);

   
  function show(){
      setBurger(!burger);
  }


  const [display,setDisplay]=useState();
  function dis(){
      setDisplay(!display)
  }



  
  const menuRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
      const handleOutsideClick = (event) => {
        // Check if the click is outside the menuRef
        if ((menuRef.current && !menuRef.current.contains(event.target)) && (imgRef.current && !imgRef.current.contains(event.target))) {
          setDisplay(false);
        }
      };
  
      // Attach the event listener to the document
      document.addEventListener('mousedown', handleOutsideClick);
  
      // Clean up the event listener on component unmount
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, []);

   




  return (
    <div>

<header>
            <nav>


            <div class="navbar">
                <div class="left">
                    <p>AJINKYA KAWADE</p>
                </div>

           <div className='right'>
            
           <div className="btn">
              
              <button className ="hammer" onClick={dis}><i className={burger ? "fas fa-bars icon_bar " : "fas fa-bars icon_bar" } ref={imgRef}  onClick={show}></i></button>
          </div>
          <div className={display? "burgerdata" : "burgerdata2"} ref={menuRef}>
              <div className="dkd">
              <li className="burgerItem"><button id="closeButton" class="xbtn" onClick={() => setDisplay(false)}>X</button></li>
              <Link to="/" smooth={true} duration={500} className="burgerItem"> <li className="burgerItem">INTRO</li></Link> 
              <Link to="/about" smooth={true} duration={500} className="burgerItem"> <li className="burgerItem">ABOUT</li></Link> 
              <Link to="/skills" smooth={true} duration={500} className="burgerItem"><li className="burgerItem">SKILLS</li></Link> 
              <Link to="/projects" smooth={true} duration={500} className="burgerItem"><li className="burgerItem">PROJECTS</li></Link> 
              <Link to="/contact" smooth={true} duration={500} className="burgerItem"><li className="burgerItem">CONTACT</li></Link> 

              </div>
          </div>
           </div>

              </div>
              
            </nav>
        </header>


    </div>
  )
}

export default Nav