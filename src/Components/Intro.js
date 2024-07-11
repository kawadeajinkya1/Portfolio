import React from 'react';
import './Intro.css'
import A from "./../Assests/ajinkya.jpg"
import A1 from "./../Assests/a1.png"
import Fade from 'react-reveal/Fade';
import Fb from "./../Assests/fb.png"
import In from "./../Assests/li.png"
import Li from "./../Assests/in.png"
import Re from "./../Assests/re.png"
import Nav from "./Nav";

const Intro = ({ id }) => {


return (

  <div>

<Nav />

<section className='i1' id={id}>
<div className='im'>
<center>
<Fade left>
    <img src={A1} alt="ajinkya kawade" className='ak'></img>
    </Fade>
</center>

</div>
<Fade right>
<div className='info'>
<p className='p2'>Hello, I'm</p>
<h3 className='h31'><span className='s1'>AJINKYA</span>&emsp;<span className='s2'>KAWADE</span></h3>

<p className='p3'>As a professional web developer, developing creative and intuitive web solutions is my primary objective .</p>

<div className='sm'>

<div className='sm1'><a href="https://www.linkedin.com/in/ajinkya-kawade-2a105b283/"><img src={Li} alt="ajinkya kawade" className='smi'></img></a> </div>
<div className='sm1'><a href="https://www.instagram.com/kawadeajinkya1/"> <img src={In} alt="ajinkya kawade" className='smi'></img></a> </div>
<div className='sm1'><a href="https://www.facebook.com/kawadeajinkya1/"><img src={Fb} alt="ajinkya kawade" className='smi'></img></a> </div>
<div className='sm1'><a href=""><img src={Re} alt="ajinkya kawade" className='smi'></img></a> </div>

</div>

</div></Fade>



</section>












  </div>  
)

}

export default Intro;