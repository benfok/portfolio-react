import React, { useEffect } from 'react';
import '../styles/pageLayout.css';
import '../styles/about.css';
import aboutPic from '../images/profile1.jpg';
import FeatureBlocks from '../components/FeatureBlocks';
import ClientList from '../components/clientList';



export default function About() {

  // functions for typewriter effect
  let speed = 100;  // default speed
  let i = 16; // must match the length of the default string within the <span> for initial delete
  let wordIndex = 1;
  const text = ["Web Development.","Project Management.", "Copywriting.","Content Design."];

  const typewriter = () => {
    if (typeof i === 'number') {
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
  }

  const deleteText = () => {
    if (typeof i === 'number') {
    
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
  }

  useEffect(() => {
    // after page loads perform initial delete
    setTimeout(deleteText, 2000); 
    return () => {
      // when this page unmounts (i.e. when someone navigates away) change the i variable to stop the typing loop
      i = false; 
    }
  });

  return (
      <div className="split-content">
        <div className="container-top">
          <img src={aboutPic} alt="Profile picture of Ben" className="main-img"></img>
        </div>
        <div className="container-bottom">
          <section className='about-cont'>
            <article>
              <h1 className="typed-h1"><span id="typed-text">Web Development.</span><span id="cursor" className="h1-blink">|</span></h1>
              <p>
                  I'm Ben Fok, a freelance Full Stack Web Developer and Technical Project Manager 
                  <br/><br/>
                  With over a decade as a senior leader at a Fortune 1000 company, I bring a unique blend of business accumen, leadership skills and technical expertise to every project. 
                  <br/><br/>
                  {/* Need copy written or content designed for an existing website? Or want a fresh new look or a custom web application built for your business? Or do you have a large technical project with multiple teams and need someone to help manage it all?
                  <br/><br/> */}
                  Whether writing the code behind the scenes, or bringing your product to life through words and visual design, I deliver intuitive digital solutions that look great and function in the most effective way for your business.
              </p>
            </article>
            <ClientList
                    listArray={['timFok', 'vailResorts', 'epicPass', 'wb', 'vail', 'beaverCreek', 'breck', 'stevensPass', 'crestedButte', 'parkCity', 'keystone', 'heavenly', 'northstar', 'kirkwood', 'hunter', 'stowe', 'mountSnow', 'okemo', 'psia', 'pnsaa'  ]}
                />
            <FeatureBlocks />
          </section>
        </div>
      </div>
  );
}

