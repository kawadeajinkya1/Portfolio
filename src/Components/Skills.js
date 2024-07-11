import React from 'react'
import './Skills.css'
import Fade from 'react-reveal/Fade';
import Html from './../Assests/html.png';
import Css from './../Assests/css.png';
import Js from './../Assests/js.png';
import Rjs from './../Assests/science.png';

import Wp from './../Assests/wordpress.png';
import Cp from './../Assests/cpn.png';

import Sql from './../Assests/sql-server.png';
import Mysql from './../Assests/mysql.png';
import Php from './../Assests/php.png';

import Gcc from './../Assests/gcc.png';
import Mscit from './../Assests/mscit.png';
import Nav from "./Nav";
import Chk from './../Assests/chek.png';

const Skills = ({id}) => {
  

    return (
        <div>
            <Nav/>

<section className='i3' id={id}>

<center><h4 className='head'>MY SKILLS</h4></center>
<div>
  
    <div className='fl'>
    <Fade left>
<div className='a'> 
 <h5 className='bb'> WEB Development: </h5>
<div className='list'>
<img src={Html} alt='ajinkya' className='img kj'/>
<img src={Css} alt='ajinkya' className='img kj'/>
<img src={Js} alt='ajinkya' className='img kj'/>
<img src={Rjs} alt='ajinkya' className='img kj'/>
<img src={Php} alt='ajinkya' className='img kj'/>
</div>

</div>
</Fade>


<Fade right>
<div className='a'>
 <h5 className='bb'> Database Management: </h5>
<div className='list'>
<img src={Sql} alt='ajinkya' className='img'/>
<img src={Mysql} alt='ajinkya' className='img'/>
</div>
</div>
</Fade>
</div>
<br />

<div className='fl'>

<Fade left>
<div className='a'> 
 <h5 className='bb'> Content Management System: </h5>
<div className='list'>
<img src={Wp} alt='ajinkya' className='img'/>
</div>
</div>
</Fade>


<div className='a'> 
 <h5 className='bb'> Server Administration: </h5>
<div className='list'>
<img src={Cp} alt='ajinkya' className='img'/>
</div>
</div>

<Fade right>
<div className='a'> 

 <h5 className='bb'> GENERAL SKILLS: </h5>
<div className='list'>
<img src={Gcc} alt='ajinkya' className='img'/>
<img src={Mscit} alt='ajinkya' className='img'/>
</div>
</div>
</Fade>
</div>

</div>
</section>
</div>
    )
}

export default Skills

/*



Certainly! Based on the skills you provided, here's a division into different types:

Web Development:
HTML
CSS
JavaScript (JS)
PHP
MySQL (Database)
SQL (Query Language)

Content Management System (CMS):
WordPress

Server Administration:
cPanel (Control Panel for Web Hosting)

Database Management:
MySQL
SQL
Office Productivity:
Microsoft Office
General Skills:
Typing
Feel free to let me know if you have any specific questions about these skills or if you need further clarification on any particular area!


*/