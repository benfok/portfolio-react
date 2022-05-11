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
        // <figure className="work-card">
        //     <a href="https://the-happy-place-app.herokuapp.com/" target="_blank" className="work-pic-container" rel="noreferrer">
        //         <img src={happyPlacePic} alt="The Happy Place Project" className="work-pic" />
        //     </a>
        //     <figcaption className="transparent">
        //         <h3>The Happy Place</h3>
        //         <p className="sub">HTML | CSS | JavaScript | Node.js | Express | MySQL | Handlebars.js</p>
        //         <p>
        //             Promoting mental wellbeing through a daily journal where users can post publically or privately. Intentionally free of "likes", comments and photos to ensure the focus is on your personal habits and daily gratitudes.
        //         </p>
        //         <button onClick={showHideWorkDetails} className="social-link card-icon">
        //           <FaChevronCircleUp />
        //         </button>
        //         <div className="work-description">
        //             <ul>
        //                 <li>Contributed: Back-end Javascript, authentication, webserver config and custom RESTful API routes. Front-end Handlebars rendering and responsive CSS on all pages</li>
        //                 <li>MVC code structure. Routes to CRUD from MySQL DB</li>
        //                 <li>Implemented user authentication and sessions</li>
        //                 <li>Users can set flag to view all public posts or just their own</li>
        //                 <li>Deployed on Heroku with JAWSDB</li>
        //             </ul>
        //             <a className="work-btn" href="https://the-happy-place-app.herokuapp.com/" target="_blank" rel="noreferrer">Live</a>
        //             <a className="work-btn" href="https://github.com/benfok/the-happy-place-forked" target="_blank" rel="noreferrer">Repo</a>
        //         </div>
        //     </figcaption>
        // </figure> 
    )
}

export default ProductCard;