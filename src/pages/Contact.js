import React, { useState } from 'react';
import { MdOutlineMarkEmailRead  } from 'react-icons/md';
import { IconContext } from 'react-icons';
import emailjs from '@emailjs/browser';
import '../styles/pageLayout.css';
import '../styles/contact.css'

export default function Contact() {
  // form values
  const [formState, setFormState] = useState({});
  const [errorMessage, setErrorMessage] = useState(null); 
  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value.trim(),
    });
  };

  const validate = () => {
    if (!formState.userName || formState.userName.length < 1 ) {
      setErrorMessage('Name is a required field')
      return false
      } else if (!/^([a-zA-Z0-9.!#$%&*+=?^_{|}~/-]+)@([\w.-]+)\.([a-z.]{2,6})$/.test(formState.userEmail.trim())) {
          setErrorMessage('Please enter a valid email address')
          return false
          } else if (!formState.message || formState.message.length < 1 ) {
            setErrorMessage('Message is a required field')
            return false
          } else {
            setErrorMessage(null)
            return true
          }
  }

  const createNumber = () => {
    const num = Math.random() * 10000 | 0
    setFormState({
      ...formState,
      ['contactNumber']: num,
    });
  }

  const sendEmail = (e) => {
    emailjs.send('portfolio_contact', 'portfolio_contact_form', formState, 'UEMMMcF2PUIsCuUjT')
      .then((result) => {
          // console.log(result.text);
          setEmailSent(true);
          setFormState({});
          e.target.reset();
      }, (error) => {
          // console.log(error.text);
          setErrorMessage('Oops, there was an error with your submission. Please try again.')
      });
  };

  const validateAndSend = (e) => {
      e.preventDefault();
      // console.log(formState);
      validate() ? sendEmail(e) : console.log('not ready');
  }

  return (
    <div className="split-content">
      <div className="container-top">
        <IconContext.Provider value={{ className: "main-icon main-img" }}>
            <MdOutlineMarkEmailRead />
        </IconContext.Provider>
      </div>
      <div className="container-bottom">
        <section className="contact">

          <h1>Contact Me</h1>
            <form onSubmit={validateAndSend}>
              <input type="hidden" name="contactNumber"/>
              <label>Name:</label><br/>
              <input type="text" name="userName" className="form-field" placeholder="Your Name" onChange={handleChange}/><br/>
              <label>E-mail:</label><br/>
              <input type="text" name="userEmail" id="email-field" className="form-field" placeholder="Your Email" onChange={handleChange}/><br/>
              <label>Message:</label><br/>
              <textarea name="message" rows={5} className="form-field" onClick={createNumber} onChange={handleChange}/>
              <br/><br/>
              <input type="submit" value="Send" className="btn form-btn" />
              {errorMessage && <p className="error">{errorMessage}</p>}
              {!errorMessage && !emailSent && <p className="error">&nbsp;</p>}
              {!errorMessage && emailSent && <p className="success">Thank you for your message. I will be in touch shortly!</p>}
            </form>
        </section>
      </div>
    </div>
  );
}