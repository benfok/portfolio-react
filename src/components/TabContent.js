import { React, useState, useEffect } from 'react';
import { IconContext } from 'react-icons/lib';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { usePageContext } from '../contexts/PageContext';

import ClientList from './clientList';
import ProjectMgmtExample from './ProjectMgmtExample';

const TabContent = ({activeTab}) => {

    const { setCurrentPage } = usePageContext();
    const [ showContentDefinitions, setShowContentDefinitions ] = useState(false);
    const [ showCopyDefinitions, setShowCopyDefinitions ] = useState(false);

    const toggleContentDefs = () => {
        setShowContentDefinitions(!showContentDefinitions);
    }

    const toggleCopyDefs = () => {
        setShowCopyDefinitions(!showCopyDefinitions);
    }

    const projectManagement =
            <>
                <h3>Project Management</h3>
                <p>
                    How do you bring together multiple teams, priorities and systems, to execute on time and on budget? It’s about thoughtful planning, getting buy-in, communicating clearly and yes, getting tough or getting creative when you need to!  
                </p>
                <p style={{marginBottom: "1.5rem"}}>
                    I’m a Project Manager with an extensive leadership background, almost two decades as an educator and strong technical skills regarding anything to do with the internet of things. I can not only help you get on track to reach your targets, I can connect all the people, teams and resources that need to get you there.
                </p>
                <Link
                    to="/contact"
                    onClick={() => setCurrentPage('Contact')}
                >
                    <button className="btn">Connect with Ben</button>
                </Link>
                <ProjectMgmtExample />
            </>;
    
    const content =
            <>
                <h3>Website Content</h3>
                    <p>
                        Whether you are looking to build a new website or to update an existing one, I can help design and format your content and layouts as well as:
                    </p>
                    <div className="text-link" onClick={() => toggleContentDefs()}>
                        <IconContext.Provider value={{ className: "i-icon" }}>
                            <IoInformationCircleOutline title="Information Icon" />
                        </IconContext.Provider>
                        {showContentDefinitions ? "Hide Definitions" : "Show Definitions"}
                    </div>
                <ul>
                    <li>Working and customizing within Content Management Systems<br/>
                    <span className={showContentDefinitions ? "li-sub" : "li-sub hidden"}>(CMS) Experienced with Squarespace, WordPress, Wix, Sitecore and more</span></li>
                    <li>Adding/Configuring Plugins<br/>
                    <span className={showContentDefinitions ? "li-sub" : "li-sub hidden"}>The fancy things you can add through a CMS to give your site come cool functionality</span></li>
                    <li>ADA Compliance<br/>
                    <span className={showContentDefinitions ? "li-sub" : "li-sub hidden"}>Does your site meets the requirements for disabled visitors?</span></li>
                    <li>Search Engine Optimization<br/>
                    <span className={showContentDefinitions ? "li-sub" : "li-sub hidden"}>Helping people and customers find your site</span></li>
                    <li>Mobile Responsiveness<br/>
                    <span className={showContentDefinitions ? "li-sub" : "li-sub hidden"}>Whether your site works well on mobiles, tablets and computer screens</span></li>
                    <li>Quality Assurance<br/>
                    <span className={showContentDefinitions ? "li-sub" : "li-sub hidden"}>Making sure that things function the way they are supposed to</span></li>
                </ul>
                <Link
                    to="/contact"
                    onClick={() => setCurrentPage('Contact')}
                >
                    <button className="btn">Contact Me</button>
                </Link>
                <ClientList
                    listArray={['timFok', 'vailResorts', 'epicPass', 'wb', 'vail', 'beaverCreek', 'breck', 'stevensPass', 'crestedButte', 'parkCity', 'keystone', 'heavenly', 'northstar', 'kirkwood', 'hunter', 'stowe', 'mountSnow', 'okemo'  ]}
                />
            </>;


    const copywriting =
            <>
                <h3>Copywriting</h3>
                    <p>
                        Copywriting services, at your fingertips. Or your thumb tips... Depending on how you type your emails. Unless you're hands free. Hmmm. Let's just spell it out:
                    </p>
                    <div className="text-link" onClick={() => toggleCopyDefs()}>
                        <IconContext.Provider value={{ className: "i-icon" }}>
                            <IoInformationCircleOutline title="Information Icon" />
                        </IconContext.Provider>
                        {showCopyDefinitions ? "Hide Definitions" : "Show Definitions"}
                    </div>
                <ul>
                    <li>Brand Content<br/>
                    <span className={showCopyDefinitions ? "li-sub" : "li-sub hidden"}>Copy to represent your brand, resonate with your audience and create awareness. Think taglines or headlines.</span></li>
                    <li>Web Content<br/>
                    <span className={showCopyDefinitions ? "li-sub" : "li-sub hidden"}>All your general site copy, concise, clean, and speaking through your brand voice</span></li>
                    <li>Technical Writing<br/>
                    <span className={showCopyDefinitions ? "li-sub" : "li-sub hidden"}>Copy that goes in-depth into a complex subject but breaks it down. Think How-To Guides or Handbooks</span></li>
                    <li>Instructional Design<br/>
                    <span className={showCopyDefinitions ? "li-sub" : "li-sub hidden"}>Content for training manuals, sessions or e-Learning Courses. Progressive and interactive</span></li>
                    <li>Email Copywriting<br/>
                    <span className={showCopyDefinitions ? "li-sub" : "li-sub hidden"}>Specific to driving action or creating a 1:1 relationship through email</span></li>
                    <li>Presentations<br/>
                    <span className={showCopyDefinitions ? "li-sub" : "li-sub hidden"}>Ghostwriting, formatting and editing for presentation and powerpoint decks.</span></li>
                    <li>Storyboarding and Script Copy<br/>
                    <span className={showCopyDefinitions ? "li-sub" : "li-sub hidden"}>Narrative scripts and shot lists for instructional or promotional videos</span></li>
                </ul>
                <Link
                    to="/contact"
                    onClick={() => setCurrentPage('Contact')}
                >
                    <button className="btn">Request Samples</button>
                </Link>
                <ClientList
                    listArray={['vailResorts', 'stevensPass', 'psia', 'pnsaa', 'snowOperating', 'sierraAtTahoe' ]}
                />
            </>;


    return (
        <section className="tab-content">
            {activeTab === "project-management" && projectManagement}
            {activeTab === "content" && content}
            {activeTab === "copywriting" && copywriting}
        </section>       
    )
}

export default TabContent;