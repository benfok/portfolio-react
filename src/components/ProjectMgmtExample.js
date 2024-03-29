import { React, useState } from 'react';
import { IconContext } from 'react-icons/lib';
import { BiWorld, BiLaugh } from 'react-icons/bi';
import { GiJuggler } from 'react-icons/gi';
import { GrPowerCycle } from 'react-icons/gr';
import { RiTeamFill, RiCalendarEventFill, RiCheckboxMultipleFill } from 'react-icons/ri';
import { BsGearFill } from 'react-icons/bs';
import useMedia from '../hooks/useMedia';
import '../styles/projectMgmtEx.css';


const ProjectMgmtExample = ({}) => {

    // leverage custom hook to determine screen size for container style
   const isMobile = useMedia('(max-width: 768px)');

   const [articleFull1, setArticleFull1 ] = useState(false);
   const [articleFull2, setArticleFull2 ] = useState(false);
   const [articleFull3, setArticleFull3 ] = useState(false);

    return (
        <section className={isMobile ? "pm-ex-cont pm-ex-cont-mobile" : "pm-ex-cont"}>
            <h3>Recent Projects</h3>
            <article className={isMobile ? "project-ex-mobile" : "project-ex"}>
                {isMobile && <><h4>Enterprise Product Launch</h4><p>Client: Vail Resorts</p></>}
                {!isMobile && <h4>Enterprise Product Launch  &nbsp;&nbsp;|&nbsp;&nbsp;  Vail Resorts</h4>}
                <div className="pm-stats-cont">
                    <div className="pm-stat">
                        <span className="pm-stat-no">10,000+</span>
                        <p className="pm-stat-sub">Products</p>
                    </div>
                    <div className="pm-stat">
                        <div className="pm-stat-no">
                            <RiCalendarEventFill title="Months" />
                            <span>6</span>
                        </div>
                        <p className="pm-stat-sub">Months</p>
                    </div>
                    <div className="pm-stat">
                        <div className="pm-stat-no">
                            <BiWorld title="Websites" />
                            <span>35</span>
                        </div>
                        <p className="pm-stat-sub">Websites</p>
                    </div>
                    <div className="pm-stat">
                        <div  className="pm-stat-no" >
                            <RiTeamFill title="Departments" />
                            <span>15+</span>
                        </div>
                        <p className="pm-stat-sub">Departments</p>
                    </div>
                    <div className="pm-stat">
                        <span className="pm-stat-no">$150m+</span>
                        <p className="pm-stat-sub">Revenue</p>
                    </div>
                    <div className="pm-stat">
                        <div  className="pm-stat-no" >
                            <BsGearFill title="Systems" />
                            <span>8</span>
                        </div>
                        <p className="pm-stat-sub">Systems</p>
                    </div>
                    <div className="pm-stat">
                        <div  className="pm-stat-no">
                            <BiLaugh title="Jokes" />
                            <span>100+</span>
                        </div>
                        <p className="pm-stat-sub">Jokes Told</p>
                    </div>
                </div>
                <div className="pm-copy-cont">
                    <p><strong>Brief: </strong>Successfully launch all Snow School products across 37 resorts ahead of the winter season.</p>
                    {articleFull1 && 
                        <div className="pm-copy-ext">
                            <p>The Snow Schools across the 37 different Vail Resorts pull in over $200 million in revenue each year, with the majority of that coming through online sales. The 10,000+ different products across 5 sales channels are updated, configured and launched ahead of each winter season. <strong>I was tasked </strong>with leading and streamlining this process, and ensuring that the hundreds of individual contributors across 15 teams such as Marketing, Digital, Resort Operations and Legal were kept on track and informed. </p>
                            <p>This was the most successful launch to date for the company, with all 5 of the scheduled launch dates hitting on time. Some of our biggest wins were:</p>
                            <ul className="article-list">
                                <li>Bridging the cultural and logistical gap between the central teams and the resort locations</li>
                                <li>Understanding the 8 major systems involved to leverage efficiencies and identify problems</li>
                                <li>Extracting results from accountable parties when their own teams had competing priorities</li>
                                <li>Agile decision making when fundamental changes occurred mid-stream</li>
                                <li>Communicating information in simple, fun and interactive ways</li>
                                <li>Training and onboarding several resort Directors who were new in role</li>
                            </ul>
                            <p>In addition to Project Management, my experience allowed me to support the project as a technical resource to:</p>
                            <ul className="article-list">
                                <li>Update customer email template copy and code for all resorts</li>
                                <li>Update legal documentation</li>
                                <li>Ghostwrite, edit and format informational and promotional pages and guest FAQs</li>
                                <li>Code 2 custom sales funnel builds</li>
                                <li>Perform Quality Assurance across all pages</li>
                                <li>Troubleshoot back-end issues within the CMS system in real-time</li>

                            </ul>
                            <p>Throughout the project we solicited feedback and in many cases were able to make adjustments prior to the next launch or phase. The rest of the feedback was compiled and provided in a recommendation package for future launches!</p>
                        </div>
                    }
                    <span className="text-link" onClick={() => setArticleFull1(!articleFull1)}>{!articleFull1 ? "Read More..." : "Read Less..." }</span>
                </div>
            </article>
            <article className={isMobile ? "project-ex-mobile" : "project-ex"}>
                {isMobile && <><h4>Annual Season Pass Launch</h4><p>Client: Vail Resorts</p></>}
                {!isMobile && <h4>Annual Season Pass Launch &nbsp;&nbsp;|&nbsp;&nbsp; Vail Resorts</h4>}
                
                <div className="pm-stats-cont">
                    <div className="pm-stat">
                        <div className="pm-stat-no">
                            <BiWorld title="Webpages" />
                            <span>350+</span>
                        </div>
                        <p className="pm-stat-sub">Webpages</p>
                    </div>
                    <div className="pm-stat">
                        <div className="pm-stat-no">
                            <RiCalendarEventFill title="Week" />
                            <span>1</span>
                        </div>
                        <p className="pm-stat-sub">Week</p>
                    </div>
                    <div className="pm-stat">
                        <div  className="pm-stat-no" >
                            <RiTeamFill title="Teams" />
                            <span>9</span>
                        </div>
                        <p className="pm-stat-sub">QA Teams</p>
                    </div>
                    <div className="pm-stat">
                        <span className="pm-stat-no">2milion+</span>
                        <p className="pm-stat-sub">Units Sold</p>
                    </div>
                </div>
                <div className="pm-copy-cont">
                    <p><strong>Brief: </strong>Leverage a new system to coordinate the update and QA process on 36 sites, for annual Pass Launch.</p>
                    {articleFull2 && 
                        <div className="pm-copy-ext">
                            <p>Each year in March, Vail Resorts releases it’s new Season Pass products for sale for the following winter. This is the most critical product launch for the company. To add some complexity, as a public company, all information regarding changes to pass products and programs is considered material, and as such, the process of updating the webpages, products and configuration ahead of the annual launch is done behind NDAs and on a very tight timeline.</p>
                            <p>Executing within this timeline creates a challenge in itself. For this project I also took the risk of recommending that the company adopt a new system for managing the workflow. <strong>I was tasked </strong>with configuring the system, outlining and assigning the tasks and training the teams involved. </p>
                            <p>We successfully updated all the pages on time, and I lead the team through a complex, 2-factor Quality Assurance process for each page – as it was vital that no detail was missed.</p>
                            <p>The teams involved cited the launch as the most stress-free and easiest to date, with many of the folks involved appreciative of the way they were prepped and setup to use the new system.</p>
                        </div>
                    }
                    <span className="text-link" onClick={() => setArticleFull2(!articleFull2)}>{!articleFull2 ? "Read More..." : "Read Less..." }</span>
                </div>
            </article>
            <article className={isMobile ? "project-ex-mobile" : "project-ex"}>
                {isMobile && <><h4>Digital Experience Requests</h4><p>Client: Vail Resorts</p></>}
                {!isMobile && <h4>Digital Experience Requests &nbsp;&nbsp;|&nbsp;&nbsp; Vail Resorts</h4>}
                
                <div className="pm-stats-cont">
                    <div className="pm-stat">
                        <div className="pm-stat-no">
                            <RiCheckboxMultipleFill title="Issues Resolved" />
                            <span>900+</span>
                        </div>
                        <p className="pm-stat-sub">Tickets Resolved</p>
                    </div>
                    <div className="pm-stat">
                        <div className="pm-stat-no">
                            <RiCalendarEventFill title="Months" />
                            <span>7</span>
                        </div>
                        <p className="pm-stat-sub">Months</p>
                    </div>
                    <div className="pm-stat">
                        <div className="pm-stat-no">
                            <GrPowerCycle title="Efficiency" />
                            <span>30%+</span>
                        </div>
                        <p className="pm-stat-sub">Improved Efficiency</p>
                    </div>
                    <div className="pm-stat">
                        <div  className="pm-stat-no" >
                            <GiJuggler title="Juggling Icon" />
                            <span>20+</span>
                        </div>
                        <p className="pm-stat-sub">Projects Managed</p>
                    </div>
                </div>
                <div className="pm-copy-cont">
                    <p><strong>Brief: </strong>Revamp and manage the Digital Experience Team's issue resolution and project execution process. Make it more organized and efficient.</p>
                    {articleFull3 && 
                        <div className="pm-copy-ext">
                            <p>The Digital Experience (DX) Team at Vail Resorts manages content updates across ~40 sites. Stakeholders submit tickets to the DX team when content needs to be adjusted or updated. The team also undertakes monthly projects to launch, remove, update, audit, enhance or fix site content in alignment with the company's annual operating cycle.</p>
                            <p>I was hired as a temporary backfill for a Project Manager who was leaving the company and <strong>I was tasked</strong> with improving the ticket resolution process, from intake to prioritization to implementation, as well as managing the allocation of employee and third party resources across tickets and projects to ensure the team stayed on schedule.</p>
                            <p>I lead the integration and training of a new intake system, optimized stakeholder facing content and implemented some more effective ways of communicating and working; resulting in average ticket resolution work times dropping by over 30% and hitting all key project milestones.</p>
                            <p>One example of efficiency gains outside of managing the ticket system was when I was able to leverage my technical skills to create a custom dashboard that dynamically pulled data from a 3rd party system to provide status updates on a major project, replacing days worth of manual work done during the previous cycle.</p>
                            <p>My temporary appointment became a 7 month contract and I continue to advise and assist the team on a temporary basis as needs arise.</p>
                        </div>
                    }
                    <span className="text-link" onClick={() => setArticleFull3(!articleFull3)}>{!articleFull3 ? "Read More..." : "Read Less..." }</span>
                </div>
            </article>
        </section>
    )
}

export default ProjectMgmtExample;