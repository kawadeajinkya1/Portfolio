import React from 'react'
import './Abt.css'
import Fade from 'react-reveal/Fade';
import Nav from "./Nav";


const Abt = ({id}) => {
  

    return (
      <div>
<Nav />
      
<section className='i2' id={id}>
  
<div className='abt'>
<Fade left>   
<center><h4 className='head'>ABOUT ME</h4></center>
<p>&emsp;&emsp;Hi there, my name is Ajinkya Kawade, and I'm a graduate of S.P. College with a BSc in Computer Science and H.V. Desai College with an MSc. My educational background is strong; I received scores of 79.75% and 75.80%, respectively. In addition to my degrees, I have taken the MS-CIT course, which broadens my skill set by delving into the fundamentals of information technology. It is a local government computer training.</p>
<p>&emsp;&emsp;But it goes beyond academics; I've demonstrated my typing prowess with GCC-TBC, reaching 30 wpm in Marathi and 40 wpm in English. I'm a web developer at Cortica Web Solutions right now. I'm applying my knowledge and abilities to the table every day, and it's a thrilling path from the classroom to real-world development.</p>

</Fade>


</div>


<div className='exp'>
<Fade right>  
<center><h4 className='head'>EXPERIENCE</h4></center>

<div >

<ul className='timeline'>
<li>Web development expertise includes HTML, CSS, JS, ReactJs, and MySQL, providing development support to various projects with a focus on responsive design.</li>
<li>Skilled in MySQL server management, proficient in executing and constructing queries using tools like MySQL with PHP integration.</li>
<li>Proficient in WordPress and Bootstrap, adept at customizing code to meet client requirements, ensuring responsive layouts for both desktop and mobile platforms.</li>
<li>Identify and recommend optimization approaches to proactively address potential issues, ensuring a smooth experience for end users.</li>
<li>Collaborate closely with internal and external teams within business and IT, as well as external clients, for effective planning, deployment, and maintenance of websites.</li>
<li>Extensive experience with live cPanel servers, encompassing tasks such as SSL configuration, domain and subdomain creation, website uploading, and database deployment, along with user linkage.</li>
  </ul>
  
</div>
</Fade>
</div>




</section>
</div>
)
  
}

export default Abt;