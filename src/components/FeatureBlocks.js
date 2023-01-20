import React from "react";
import { Link } from 'react-router-dom';
import { HiOutlinePencilAlt, HiOutlineViewGrid, HiOutlinePresentationChartLine, HiOutlineCode } from 'react-icons/hi';
import '../styles/featureBlock.css';
import { usePageContext } from '../contexts/PageContext';

const FeatureBlocks = () => {

    const { currentPage, setCurrentPage } = usePageContext();

    return (
        <section className="features-section">
            <div className="f-header-cont">
                <div className="sub-header">Services</div>
                <h2>Let's Work Together!</h2>
            </div>
            <div className="features-cont">
                <div className="feature">
                    <div className="f-icon-cont">
                        <HiOutlineCode title="Web Application Development Services" />
                    </div>
                    <div className="f-copy-cont">
                        <h3>
                            <Link
                                to="/portfolio"
                                onClick={() => setCurrentPage('Portfolio')}
                                className="f-hdr-link"
                            >
                                Web Applications
                            </Link>
                        </h3>
                        <p className="f-copy">Custom solutions for your business needs. Ever asked; <em>"If only our website could..?"</em> Well, maybe it can!</p>
                        <Link
                            to="/portfolio"
                            onClick={() => setCurrentPage('Portfolio')}
                            className="f-link"
                        >
                            View Portfolio
                            <div className="f-link-border"></div>
                        </Link>
                    </div>
                </div>
                <div className="feature">
                    <div className="f-icon-cont">
                        <HiOutlinePresentationChartLine title="Project Management Services" />
                    </div>
                    <div className="f-copy-cont">
                        <h3>
                            <Link
                                to="/services/project-management"
                                onClick={() => setCurrentPage('Services')}
                                className="f-hdr-link"
                            >
                               Project Management
                            </Link>
                        </h3>
                        <p className="f-copy">Planning, leadership, communication and quality control across enterprise scale projects</p>
                        <Link
                            to="/services/project-management"
                            onClick={() => setCurrentPage('Services')}
                            className="f-link"
                        >
                            Learn More
                            <div className="f-link-border"></div>
                        </Link>
                    </div>
                </div>
                <div className="feature">
                    <div className="f-icon-cont">
                        <HiOutlineViewGrid title="Website Design Services" />
                    </div>
                    <div className="f-copy-cont">
                        <h3>
                            <Link
                                to="/services/content"
                                onClick={() => setCurrentPage('Services')}
                                className="f-hdr-link"
                            >
                               Website Content
                            </Link>
                        </h3>
                        <p className="f-copy">1,000+ pages built or enchanced. Need help to revamp your site or drive a concept to execution?</p>
                        <Link
                            to="/services/content"
                            onClick={() => setCurrentPage('Services')}
                            className="f-link"
                        >
                            Learn More
                            <div className="f-link-border"></div>
                        </Link>
                    </div>
                    {/* Graphic Design
                    Auditing (ADA, SEO, QA, Responsiveness etc) */}
                </div>
                <div className="feature">
                    <div className="f-icon-cont">
                        <HiOutlinePencilAlt title="Copywriting Services" />
                    </div>
                    <div className="f-copy-cont">
                        <h3>
                            <Link
                                to="/services/copywriting"
                                onClick={() => setCurrentPage('Services')}
                                className="f-hdr-link"
                            >
                               Copywriting
                            </Link>
                        </h3>
                        <p className="f-copy">Copy for brand, optimized web content, technical docs or email marketing at your fingertips</p>
                        <Link
                            to="/services/copywriting"
                            onClick={() => setCurrentPage('Services')}
                            className="f-link"
                        >
                            Learn More
                            <div className="f-link-border"></div>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default FeatureBlocks;