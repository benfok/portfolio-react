import React, { useEffect } from 'react';
import '../styles/pageLayout.css';
import '../styles/about.css';
import aboutPic from '../images/profile1.jpg';


export default function About() {

  // functions for typewriter effect
  let speed = 100;  // default speed
  let i = 16; // must match the length of the default string within the <span> for initial delete
  let wordIndex = 1;
  const text = ["Web Development.","Project Management.", "Copywriting.","Content Design."];

  const typewriter = () => {
    if (wordIndex > 3) { // adjust this if the array length above is changed
      wordIndex = 0;
    }
    if(i < text[wordIndex].length) {
      speed = Math.floor(Math.random() * (150 - 80) + 80); // generates random speed number to simulate actual typing
      document.getElementById("typed-text").innerHTML += text[wordIndex].charAt(i);
      i++;
      setTimeout(typewriter, speed);
    } else {
      document.getElementById("cursor").className = "h1-blink";
      wordIndex++;
      setTimeout(deleteText, 2000);  // deletes text after phrase is typed
    }
  }

  const deleteText = () => {
    document.getElementById("cursor").className = "h1-typing";

    if(i > 0) {
      const deleteSpeed = 40;
      document.getElementById("typed-text").innerHTML = document.getElementById("typed-text").innerHTML.slice(0, -1);
      i--;
      setTimeout(deleteText, deleteSpeed);
    } else {
      setTimeout(typewriter, 200);  // loop back to type next phrase
    }
  }

  // after page loads perform initial delete
  useEffect(() => {
    setTimeout(deleteText, 2000); 
  });

  return (
    <div className="split-content">
      <div className="container-top">
        <img src={aboutPic} alt="profile" className="main-img"></img>
      </div>
      <div className="container-bottom">
        <article className='intro-about'>
          <h1>I do <span id="typed-text">Web Development.</span><span id="cursor" className="h1-blink">|</span></h1>
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

