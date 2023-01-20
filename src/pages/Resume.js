import React from 'react';
import '../styles/pageLayout.css';
import Button from '../components/Button';
import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiNodedotjs, SiExpress, SiReact, SiHandlebarsdotjs, SiJquery, SiGit, SiMysql, SiMongodb } from 'react-icons/si';
import LanguageIcon from '../components/LanguageIcon';
import useMedia from '../hooks/useMedia';
import resumePic from '../images/profile3bw.png';
import resume from '../files/resume_FOK_221231.pdf';
import '../styles/resume.css';

export default function Resume() {

  const isMobile = useMedia('(max-width: 998px)');

  return (
    <div className="split-content">
      <div className="container-top">
        <img src={resumePic} alt="Black and white profile picture of Ben" className="main-img"></img>
      </div>
      <div className="container-bottom">
        <article className='intro-resume'>
          <h1>Experience</h1>
          {!isMobile && <p>Full Stack Web Developer <strong>&nbsp;&nbsp;|&nbsp;&nbsp;</strong>  Project Manager <strong>&nbsp;&nbsp;|&nbsp;&nbsp;</strong> Senior Leader <strong>&nbsp;&nbsp;|&nbsp;&nbsp;</strong> Elite Level Educator</p>}
          {isMobile && <p>Full Stack Web Developer<br/>Project Manager<br/>Senior Leader<br/>Master Educator</p>}
          <Button src={resume} text={'Resume'} />
        </article>
        <section className="skills-container">
            <h2>My Skills</h2>
            <div className="languages-container"> 
                <LanguageIcon icon={<SiHtml5 />} text={'HTML 5'} />
                <LanguageIcon icon={<SiCss3/>} text={'CSS 3'} />
                <LanguageIcon icon={<SiJavascript/>} text={'JavaScript'} />
                <LanguageIcon icon={<SiNodedotjs/>} text={'Node.js'} />
                <LanguageIcon icon={<SiExpress/>} text={'Express'}/>
                <LanguageIcon icon={<SiReact/>} text={'ReactJS'} />
                <LanguageIcon icon={<SiBootstrap/>} text={'Bootstrap'} />
                <LanguageIcon icon={<SiHandlebarsdotjs/>} text={'Handlebars'} />
                <LanguageIcon icon={<SiJquery/>} text={'jQuery'} />
                <LanguageIcon icon={<SiGit/>} text={'Git'} />
                <LanguageIcon icon={<SiMysql/>} text={'MySQL'} />
                <LanguageIcon icon={<SiMongodb/>} text={'MongoDB'} />
            </div>
        </section>
      </div>
    </div>
  );
};

