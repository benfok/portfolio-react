import React from 'react';
import '../styles/pages.css';
import aboutPic from '../images/profile3bw.png';

export default function Contact() {

  return (
    <div className="home-content">
      <div className="container-top">
        <img src={aboutPic} alt="Contact Me Picture" className="main-img"></img>
      </div>
      <div className="container-bottom">
        <article className='intro'>
          <h1>Contact Me</h1>
          <p>
              Insert form here
          </p>
        </article>
      </div>
    </div>
  );
}
