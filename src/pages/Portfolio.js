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
import textEditorPic from '../images/text-editor.png';
import codeQuizPic from '../images/code_quiz.png';
import techBlogPic from '../images/tech-blog1.png';
import weatherDashPic from '../images/weather-dashboard3.png';
import ethelPic from '../images/ethel-portfolio3.png';

export default function Portfolio() {
  return (
    <div className="split-content">
      <div className="container-top">
        <IconContext.Provider value={{ className: "main-icon main-img" }}>
            <FaCode />
        </IconContext.Provider>
      </div>
      <div className="container-bottom">
        <div className="portfolio-container">
          <h1 className="portfolio-h1">My Work</h1>
          <section className="work-section">
              <ProductCard project={projects.ethel} imageSrc={ethelPic}/>
              <ProductCard project={projects.theHappyPlace} imageSrc={happyPlacePic}/>
              <ProductCard project={projects.pubCrawler} imageSrc={pubCrawlerPic}/>
              <ProductCard project={projects.textEditor} imageSrc={textEditorPic}/>
              <ProductCard project={projects.codeQuiz} imageSrc={codeQuizPic}/>
              <ProductCard project={projects.techBlog} imageSrc={techBlogPic}/>
              <ProductCard project={projects.weatherDashboard} imageSrc={weatherDashPic}/>
          </section>
        </div>
      </div>
    </div>
  );
}
