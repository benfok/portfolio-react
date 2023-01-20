import { React, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FaHandsHelping } from 'react-icons/fa';
import Tabs from '../components/Tabs';
import '../styles/services.css';
import '../styles/pageLayout.css';


const Services = () => {

  const tabRef = useRef(null); // represents tab container

  // determine if the URL has a parameter. If so handle scroll position with useEffect
  const params = useParams(); 

  useEffect(() => {
    params.active_tab ? tabRef.current.scrollIntoView() : window.scrollTo(0,0); // if a tab name exists in the parameter scroll to it, otherwise scroll to page top
  }, []);

  return (
    <div className="split-content">
      <div className="container-top">
        <IconContext.Provider value={{ className: "main-icon main-img" }}>
            <FaHandsHelping />
        </IconContext.Provider>
      </div>
      <div className="container-bottom">
        <section className="services-cont">
            <div className="services-intro">
                {/* <div className='sub-header'>Services</div> */}
                <h1 className="services-h1" ref={tabRef}>Services</h1>
                <p>Get the web content you need and someone to manage your technical projects</p>
            </div>
              <Tabs />
        </section>
      </div>
    </div>
  );
}

export default Services;

