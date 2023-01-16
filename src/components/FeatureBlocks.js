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
                        <HiOutlineCode />
                    </div>
                    <div className="f-copy-cont">
                        <h3>Web Applications</h3>
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
                        <HiOutlinePresentationChartLine />
                    </div>
                    <div className="f-copy-cont">
                        <h3>Project Management</h3>
                        <p className="f-copy">Planning, experienced leadership, comms and quality control across enterprise scale projects</p>
                        <Link
                            to="/services"
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
                        <HiOutlinePencilAlt />
                    </div>
                    <div className="f-copy-cont">
                        <h3>Copywriting</h3>
                        <p className="f-copy">Copy for brand, optimized web content, technical docs or email marketing at your fingertips</p>
                        <Link
                            to="/services"
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
                        <HiOutlineViewGrid />
                    </div>
                    <div className="f-copy-cont">
                        <h3>Website Content</h3>
                        <p className="f-copy">1,000+ pages built or enchanced. Need help to revamp your site or drive a concept to execution?</p>
                        <Link
                            to="/services"
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
            </div>
        </section>
    )
}

export default FeatureBlocks;