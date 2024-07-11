import React from 'react';
import Nav from './../Components/Nav';
import Intro from './../Components/Intro';
import Abt from './../Components/Abt';
import Skills from './../Components/Skills';
import Projects from './../Components/Projects';
import Contact from './../Components/Contact';

const Home = () => {
  return (
    <div>
<Nav />  
<Intro id="intro"  />
<Abt id="about" />
<Skills id="skills" />
<Projects id="projects"/>
<Contact  id="contact"/>
    </div>
  )
}

export default Home