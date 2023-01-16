import React from 'react';
import '../styles/pageLayout.css';
import useMedia from '../hooks/useMedia';
import { IconContext } from 'react-icons';
import { FaHandsHelping } from 'react-icons/fa';
import '../styles/services.css';
import Tabs from '../components/Tabs';


export default function Services() {

  const isMobile = useMedia('(max-width: 998px)');

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
                <h1 className="services-h1">Services</h1>
                <p>Get the web content you need and someone to manage your technical projects</p>
            </div>
            <Tabs />
        </section>
      </div>
    </div>
  );
}

