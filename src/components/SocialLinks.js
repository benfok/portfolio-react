import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin  } from 'react-icons/fa';
import { MdAlternateEmail } from "react-icons/md";

class SocialLinks extends React.Component {
    render () {
        return (

                <div className="social-container">
                        <a href="https://github.com/benfok/" target="_blank" rel="noreferrer"><FaGithub /></a>
                        <a href="https://www.instagram.com/benfok8/?hl=en" target="_blank" rel="noreferrer"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/in/benfok/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                        <a href="mailto:ben@tidylines.co"><MdAlternateEmail /></a>
                </div>
        )
    }
}

export default SocialLinks;