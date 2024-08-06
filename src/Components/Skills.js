import React from 'react'
import classes from './Skills.module.css'
import Fade from 'react-reveal/Fade';
import Html from './../Assests/html.png';
import Css from './../Assests/css.png';
import Js from './../Assests/js.png';
import Rjs from './../Assests/science.png';

import Wp from './../Assests/wordpress.png';
import Cp from './../Assests/cpn.png';

import Sql from './../Assests/sql.png';
import Mysql from './../Assests/mysql.png';
import Php from './../Assests/php.png';
import Mongo from './../Assests/mongodb.png';
import Node from './../Assests/nodejs.png';

import Gcc from './../Assests/gcc.png';
import Mscit from './../Assests/mscit.png';
import Nav from "./Nav";
import Chk from './../Assests/chek.png';

const Skills = ({id}) => {
  

    return (
        <div>
            <Nav/>

<section className={classes.i3} id='Skills'>

<center><h4 className={classes.head}>My Skills</h4></center>
<div>
  
    <div className={classes.fl}>
    <Fade left>
<div className={classes.a}> 
 <h5 className={classes.bb}> WEB Development: </h5>
<div className={classes.list}>
<img src={Html} alt='ajinkya' className={classes.img}/>
<img src={Css} alt='ajinkya' className={classes.img}/>
<img src={Js} alt='ajinkya' className={classes.img}/>
<img src={Rjs} alt='ajinkya' className={classes.img}/>
<img src={Php} alt='ajinkya' className={classes.img}/>
</div>

</div>
</Fade>


<Fade right>
<div className={classes.a}>
 <h5 className={classes.bb}> Database Management: </h5>
<div className={classes.list}>
<img src={Sql} alt='ajinkya' className={classes.img}/>
<img src={Mysql} alt='ajinkya' className={classes.img}/>
<img src={Mongo} alt='ajinkya' className={classes.img}/>
<img src={Node} alt='ajinkya' className={classes.img}/>
</div>
</div>
</Fade>
</div>
<br />

<div className={classes.fl}>

<Fade left>
<div className={classes.a}> 
 <h5 className={classes.bb}> Content Management System: </h5>
<div className={classes.list}>
<img src={Wp} alt='ajinkya' className={classes.img}/>
</div>
</div>
</Fade>

<div className={classes.a}> 
 <h5 className={classes.bb}> Server Administration: </h5>
<div className={classes.list}>
<img src={Cp} alt='ajinkya' className={classes.img}/>
</div>
</div>


<Fade right>
<div className={classes.a}> 

 <h5 className={classes.bb}> GENERAL SKILLS: </h5>
<div className={classes.list}>
<img src={Gcc} alt='ajinkya' className={classes.img}/>
<img src={Mscit} alt='ajinkya' className={classes.img}/>
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