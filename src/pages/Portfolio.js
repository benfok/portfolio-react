import React from 'react';
import '../styles/pageLayout.css';
import '../styles/portfolio.css'
import ProductCard from '../components/ProjectCard';
import { projects } from '../utils/projects';
import { FaCode } from 'react-icons/fa';
import { IconContext } from 'react-icons';

//import pics
import happyPlacePic from '../images/happy-place1.png';
import pubCrawlerPic from '../images/pubcrawler.png';
import codeQuizPic from '../images/code_quiz.png';
import techBlogPic from '../images/tech-blog1.png';

export default function Portfolio() {
  return (
    <div className="single-container">
      <div className="portfolio-top">
          <IconContext.Provider value={{ className: "portfolio-icon" }}>
            <FaCode />
          </IconContext.Provider>
          <h1>My Work</h1>
      </div>
      <section className="work-section">
          <ProductCard project={projects.theHappyPlace} imageSrc={happyPlacePic}/>
          <ProductCard project={projects.pubCrawler} imageSrc={pubCrawlerPic}/>
          <ProductCard project={projects.codeQuiz} imageSrc={codeQuizPic}/>
          <ProductCard project={projects.techBlog} imageSrc={techBlogPic}/>
      </section>
    </div>
  );
}
