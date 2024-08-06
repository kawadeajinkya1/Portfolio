import React from 'react';
import classes from './Intro.module.css'
import A from "./../Assests/ajinkya.jpg"
import A1 from "./../Assests/a1.png"
import Fade from 'react-reveal/Fade';
import Fb from "./../Assests/fb.png"
import In from "./../Assests/li.png"
import Li from "./../Assests/in.png"
import Re from "./../Assests/cv.png"
import Gb from "./../Assests/github.png"
import Wp from "./../Assests/wp.png"
import Cv from "./../Assests/Ajinkya_Kawade_Resume.pdf"
import Nav from "./Nav";

const Intro = ({ id }) => {




return (

  <div>

<Nav />

<section className={classes.i1} id='home' >
<div className={classes.im}>
<center>
<Fade left>
    <img src={A1} alt="ajinkya kawade" className={classes.ak}></img>
    </Fade>
</center>

</div>
<Fade right>
<div className={classes.info}>
<p className={classes.p2}>Hey, I'm</p>
<h3 className={classes.h31}><span className={classes.s1}>AJINKYA</span>&emsp;<span className={classes.s2}>KAWADE</span></h3>

<p className={classes.p3}>As a professional web developer, my goal is to create innovative and user-friendly web solutions. I focus on using the latest technologies to deliver engaging and efficient digital experiences, ensuring that each project meets the highest standards of quality and functionality.</p>

<div className={classes.sm}>

<div className={classes.sm1}><a href="https://www.linkedin.com/in/ajinkya-kawade-2a105b283/"><center><img src={In} alt="ajinkya kawade" className={classes.smi}></img></center></a> </div>
<div className={classes.sm1}><a href="https://www.github.com/kawadeajinkya1"><center><img src={Gb } alt="ajinkya kawade" className={classes.smi}></img></center></a> </div>
<div className={classes.sm1}><a href={Cv}  target="_blank" rel="noreferrer"><center><img src={Re} alt="ajinkya kawade" className={classes.smi}></img></center></a> </div>
<div className={classes.sm1}><a href="https://www.instagram.com/kawadeajinkya1/"><center><img src={Li} alt="ajinkya kawade" className={classes.smi}></img></center></a> </div>
<div className={classes.sm1}><a href="https://www.facebook.com/kawadeajinkya1/"><center><img src={Fb} alt="ajinkya kawade" className={classes.smi}></img></center></a> </div>
<div className={classes.sm1}><a href="https://wa.me/9970568912"><center><img src={Wp} alt="ajinkya kawade" className={classes.smi}></img></center></a> </div>

</div>

</div></Fade>



</section>












  </div>  
)

}

export default Intro;