import React from 'react';
import '../styles/pages.css';
import aboutPic from '../images/profile-skate.JPG';


export default function About() {

  return (
    <div className="home-content">
      <div className="container-top">
        <img src={aboutPic} alt="About Picture" className="main-img"></img>
      </div>
      <div className="container-bottom">
        <article className='intro'>
          <h1>About Me</h1>
          <p>
              I'm a freelance full stack developer specializing in creating clean and scalable web pages. 
              <br/><br/>
              With over 15 years experience as a senior leader and educator within dynamic and customer centric industries I bring a unique blend of business accumen, people skills and technical expertise to every project. 
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

