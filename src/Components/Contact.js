import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"
import Fade from 'react-reveal/Fade';
import Nav from "./Nav";
const Contact = ({id}) => {


        const form = useRef();

        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_o2uedbj', 'template_jlvxw74', form.current, 'zzcyMg2WUM3keNiAR')
            .then((result) => {
      
              alert("Message Sent Successfully !!!")
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        };
    

  return (
    <div>
      <Nav />
    <div className='cnt' id={id}>

<div className='cnt1'><Fade left>
<center><h4 className='head'>CONTACT ME</h4></center>
<form  ref={form} onSubmit={sendEmail}>

<input placeholder='ENTER YOUR NAME' className='I1' name='name' id='name' type="text"></input>
<input placeholder='ENTER MOBILE NO' maxLength={10} className='I1' name='phn' id='phn' type="text"></input><br />
<input placeholder='ENTER YOUR EMAIL ID' className='I1' name='mail' id='mail' type="email"></input><br />
<textarea placeholder='DESCRIPTION' rows="4" className='t1' name='des' id='des'></textarea><br />
<center><input type="submit" value="SUBMIT" /></center>
</form>
</Fade>

</div>
</div>
    </div>
  )
}

export default Contact