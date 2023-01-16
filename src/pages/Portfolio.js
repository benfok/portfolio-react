import React from 'react';
import '../styles/pageLayout.css';
import '../styles/portfolio.css'
import ProductCard from '../components/ProjectCard';
import { projects } from '../utils/projects';
import { FaCode } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import useMedia from '../hooks/useMedia';

//import pics
import happyPlacePic from '../images/happy-place1.png';
import pubCrawlerPic from '../images/pubcrawler.png';
import textEditorPic from '../images/text-editor.png';
import codeQuizPic from '../images/code_quiz.png';
import techBlogPic from '../images/tech-blog1.png';
import weatherDashPic from '../images/weather-dashboard3.png';
import ethelPic from '../images/ethel-portfolio3.png';
import vailPic from '../images/vail-mock2.png';

export default function Portfolio() {

  // leverage custom hook to determine media size for work section change
   const isWide = useMedia('(max-width: 1700px)');

  return (
    <div className="split-content">
      <div className="container-top">
        <IconContext.Provider value={{ className: "main-icon main-img" }}>
            <FaCode />
        </IconContext.Provider>
      </div>
      <div className="container-bottom">
        <div className="portfolio-container">
          <div className="portfolio-intro">
            <div className='sub-header'>Web Applications</div>
            <h1 className="portfolio-h1">My Projects</h1>
            <p>Below are some of my projects to highlight a full stack skillset; from front end user interface design to back end server and database setup. Need a custom web application built for your business?</p>
          </div>
          {isWide && 
            <section className="work-section">
                <ProductCard project={projects.vailMock} imageSrc={vailPic}/>
                <ProductCard project={projects.ethel} imageSrc={ethelPic}/>
                <ProductCard project={projects.techBlog} imageSrc={techBlogPic}/>
                <ProductCard project={projects.theHappyPlace} imageSrc={happyPlacePic}/>
                <ProductCard project={projects.pubCrawler} imageSrc={pubCrawlerPic}/>
                <ProductCard project={projects.codeQuiz} imageSrc={codeQuizPic}/>
                <ProductCard project={projects.weatherDashboard} imageSrc={weatherDashPic}/>
                <ProductCard project={projects.textEditor} imageSrc={textEditorPic}/>
            </section>
          }
          {!isWide &&
            <section className="work-section-wide">
              <div className="work-section">
                <ProductCard project={projects.ethel} imageSrc={ethelPic}/>
                <ProductCard project={projects.techBlog} imageSrc={techBlogPic}/>
                <ProductCard project={projects.theHappyPlace} imageSrc={happyPlacePic}/>
                <ProductCard project={projects.pubCrawler} imageSrc={pubCrawlerPic}/>
              </div>
              <div className="work-section">
                <ProductCard project={projects.vailMock} imageSrc={vailPic}/>
                <ProductCard project={projects.weatherDashboard} imageSrc={weatherDashPic}/>
                <ProductCard project={projects.codeQuiz} imageSrc={codeQuizPic}/>
                <ProductCard project={projects.textEditor} imageSrc={textEditorPic}/>
              </div>
            </section>
          }

        </div>
      </div>
    </div>
  );
}
