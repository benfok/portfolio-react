import React, { useState } from 'react';
import { MdOutlineMarkEmailRead  } from 'react-icons/md';
import { IconContext } from 'react-icons';
import '../styles/pageLayout.css';
import '../styles/contact.css'

export default function Contact() {

  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);

  const checkEmptyName = (e) => {
    if (!e.target.value) {
      setNameValid(false)
    } else { setNameValid(true) }
  }

  const checkEmail = (e) => {
    if (!/^([a-zA-Z0-9.!#$%&*+=?^_{|}~\/-]+)@([\w.-]+)\.([a-z.]{2,6})$/.test(e.target.value)) {
      setEmailValid(false)
    } else { setEmailValid(true) }
  }

  const checkMessageValid = (e) => {
    if (!e.target.value) {
      setMessageValid(false)
    } else { setMessageValid(true) }
  }

  const resetState = () => {
    setNameValid(true)
    setEmailValid(true)
    setMessageValid(true)
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
          <form action="mailto:benfok8@gmail.com?subject=Web%20Inquiry" method="post" encType="text/plain">
            <label>Name:</label><br/>
            <input type="text" name="name" className="form-field" required onBlur={checkEmptyName} /><br/>
            {!nameValid && <p className="error">This field is required</p>}
            <label>E-mail:</label><br/>
            <input type="text" name="email" className="form-field" required onBlur={checkEmail}/><br/>
            {!emailValid && <p className="error">Please enter a valid email address</p>}
            <label>Message:</label><br/>
            <textarea name="body" rows={5} className="form-field" required onBlur={checkMessageValid} />
            {!messageValid && <p className="error">This field is required</p>}
            <br/><br/>
            <input type="submit" value="Send" className="btn form-btn" />
            <input type="reset" value="Clear" className="btn form-btn" onClick={resetState} />
          </form>
        </section>
      </div>
    </div>
  );
}
