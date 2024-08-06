import React from 'react'
import classes from './Abt.module.css'
import Fade from 'react-reveal/Fade';
import Nav from "./Nav";


const Abt = ({id}) => {
  

    return (
      <div>
<Nav />
      
<section className={classes.i2} id='About'>
  
<div className={classes.abt}>
<Fade left>   
<center><h4 className={classes.head}>About Me</h4></center>
<p className={classes.head1}>&emsp;&emsp;Hi there, my name is Ajinkya Kawade. I'm a graduate of S.P. College with a BSc in Computer Science and H.V. Desai College with an MSc, achieving scores of 79.75% and 75.80%, respectively. In addition to my degrees, I have completed the MS-CIT course, which broadened my skill set by delving into the fundamentals of information technology. This course is recognized as a local government computer training certification. I have also demonstrated my typing proficiency with GCC-TBC, achieving speeds of 30 wpm in Marathi and 40 wpm in English.</p>
<p className={classes.head1}>&emsp;&emsp;Currently, I am working at Exads IT Solutions Pvt Ltd as a full-stack web developer, where I apply my knowledge and skills in developing both static and dynamic websites. This role has allowed me to gain valuable experience and further solidify my passion for creating innovative web solutions. My journey from the classroom to practical applications has been both challenging and exhilarating, helping me grow as a developer.</p>

</Fade>


</div>


<div className={classes.exp}>
<Fade right>  
<center><h4 className={classes.head}>Experience</h4></center>

<div >

<ul className={classes.timeline}>
<li className={classes.timeline1}><span className={classes.timeline11}> Web Development Expertise:</span> Skilled in HTML, CSS, JavaScript, React.js, and MySQL, providing development support for various projects with a strong emphasis on responsive design</li>
<li className={classes.timeline1}><span className={classes.timeline11}>MySQL Server Management:</span> Proficient in executing and constructing queries using tools like MySQL, with integration capabilities in PHP.</li>
<li className={classes.timeline1}><span className={classes.timeline11}>WordPress and Bootstrap:</span> Adept at customizing code to meet client requirements, ensuring responsive layouts for both desktop and mobile platforms.</li>
<li className={classes.timeline1}><span className={classes.timeline11}>Optimization and Problem-Solving:</span> Identify and recommend optimization approaches to proactively address potential issues, ensuring a smooth experience for end users.</li>
<li className={classes.timeline1}><span className={classes.timeline11}>Collaboration:</span> Work closely with internal and external teams within business and IT, as well as external clients, to plan, deploy, and maintain websites effectively.</li>
<li className={classes.timeline1}><span className={classes.timeline11}>Live cPanel Servers:</span> Extensive experience with tasks such as SSL configuration, domain and subdomain creation, website uploading, and database deployment, along with user linkage.</li>
  </ul>
  
</div>
</Fade>
</div>




</section>
</div>
)
  
}

export default Abt;