import React from 'react';
import { FaChevronCircleUp } from 'react-icons/fa';
import { showHideWorkDetails } from '../utils/animation';

const ProductCard = (props) => {
    const project = props.project;
    return (
        <figure className="work-card">
            <a href={project.liveLink} target="_blank" className="work-pic-container" rel="noreferrer">
                <img src={props.imageSrc} alt={project.title} className="work-pic" />
            </a>
            <figcaption className="transparent">
                <h3>{project.title}</h3>
                <p className="sub">{project.technologies}</p>
                <p>
                    {project.shortDescription}
                </p>
                <button onClick={showHideWorkDetails} className="social-link card-icon">
                  <FaChevronCircleUp />
                </button>
                <div className="work-description">
                    {project.bulletDescription}
                    <a className="work-btn" href={project.liveLink} target="_blank" rel="noreferrer">Live</a>
                    <a className="work-btn" href={project.repoLink} target="_blank" rel="noreferrer">Repo</a>
                </div>
            </figcaption>
        </figure> 
    )
}

export default ProductCard;