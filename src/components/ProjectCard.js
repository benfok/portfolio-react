import React from 'react';
import { FaChevronCircleDown } from 'react-icons/fa';
import { showHideWorkDetails } from '../utils/animation';

const ProductCard = (props) => {
    const project = props.project;

    return (
        <figure className="work-card">
            {project.live &&
                <a href={project.liveLink} target="_blank" className="work-pic-container" rel="noreferrer">
                    <img src={props.imageSrc} alt={project.title} className="work-pic" />
                </a>
            }
            {!project.live &&
                <div className="work-pic-container">
                    <img src={props.imageSrc} alt={project.title} className="work-pic" />
                </div>
            }
            <figcaption className="transparent">
                <h3>{project.title}</h3>
                <p className="sub">{project.technologies}</p>
                <p>
                    {project.shortDescription}
                </p>
                <button onClick={showHideWorkDetails} className="card-icon">
                  <FaChevronCircleDown />
                </button>
                <div className="work-description">
                    {project.bulletDescription}
                    {!project.live &&
                        <a className="work-btn work-btn-disabled" onClick={(event) => event.preventDefault()} href={project.liveLink} target="_blank" rel="noreferrer">Live</a>
                    }
                    {project.live &&
                        <a className="work-btn" href={project.liveLink} target="_blank" rel="noreferrer">Live</a>
                    }
                    <a className="work-btn" href={project.repoLink} target="_blank" rel="noreferrer">Repo</a>
                    {!project.live &&
                        <p className="error">Live site is currently down for maintenance.<br/>For more details regarding this application please contact me.</p>
                    }
                </div>
            </figcaption>
        </figure> 
    )
}

export default ProductCard;