import React from 'react';
import '../styles/pageLayout.css';
import '../styles/about.css';
import aboutPic from '../images/profile1.jpg';


export default function About() {

  return (
    <div className="split-content">
      <div className="container-top">
        <img src={aboutPic} alt="profile" className="main-img"></img>
      </div>
      <div className="container-bottom">
        <article className='intro-about'>
          <h1>About Me</h1>
          <p>
              A freelance Full Stack Developer specializing in creating clean and scalable web pages. 
              <br/><br/>
              With over a decade of experience as a senior leader at a Fortune 1000 company I bring a unique blend of business accumen, resource management, leadership skills and technical expertise to every project. 
              <br/><br/>
              Whether writing the code behind the scenes, or bringing your product to life through words and visual design, I deliver intuitive digital solutions that look great and function in the most effective way for your business.
              <br/><br/>
              Let's work together!
          </p>
        </article>
      </div>
    </div>
  );
}

