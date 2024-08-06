import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";
import Fade from 'react-reveal/Fade';
import Nav from "./Nav";

const Contact = ({ id }) => {
  const form = useRef(); // Create a reference for the form element

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if form.current is defined and points to the form element
    if (form.current) {
      emailjs.sendForm('service_mwcjpjj', 'template_ix39n34', form, 'rabUlha2Db-U-xyDa')
        .then((result) => {
          alert("Message Sent Successfully!");
          console.log(result.text);
        }, (error) => {
          console.error(error.text);
          alert("There was an error sending your message. Please try again.");
        });
    } else {
      console.error("Form reference is not available.");
    }
  };

  return (
    <div>
      <Nav />
      <div className='cnt'>
        <div className='cnt1'>
          <Fade left>
            <center><h4 className='head'>CONTACT ME</h4></center>
            <form ref={form} onSubmit={sendEmail} id='form'>
              <input placeholder='ENTER YOUR NAME' className='I1' name='name' id='name' type="text" required /><br />
              <input placeholder='ENTER MOBILE NO' maxLength={10} className='I1' name='phn' id='phn' type="text" required /><br />
              <input placeholder='ENTER YOUR EMAIL ID' className='I1' name='mail' id='mail' type="email" required /><br />
              <textarea placeholder='DESCRIPTION' rows="4" className='t1' name='des' id='des' required></textarea><br />
              <center><input type="submit" value="SUBMIT" /></center>
            </form>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Contact;
