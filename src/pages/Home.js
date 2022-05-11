import React from 'react';
import '../styles/pages.css';
import profilePic from '../images/profile1.jpg';
import useMedia from '../hooks/useMedia'
import Button from '../components/Button'

export default function Home() {

  const isMobile = useMedia('(max-width: 998px)');

  return (
    <div className="home-content">
      <div className="container-top">
        <img src={profilePic} alt="Headshot of me" className="main-img"></img>
      </div>
      <div className="container-bottom">
        <article className='intro'>
          <h3>Welcome. I'm</h3>
          <h1>Ben Fok</h1>
          <p>
          A Full Stack Web Developer blending technical skills with over a decade of operational, people and senior leadership experience as an elite level educator and divisional director at a Fortune 1000 company.
          </p>
          {isMobile && <Button src={'#'} text={'Resume'} />}
        </article>
      </div>
    </div>
  );
}
