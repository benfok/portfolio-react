import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin  } from 'react-icons/fa';
import { MdAlternateEmail } from "react-icons/md";

class SocialLinks extends React.Component {
    render () {
        return (

                <div>
                        <a href="https://github.com/benfok/" target="_blank"><FaGithub /></a>
                        <a href="https://www.instagram.com/benfok8/?hl=en" target="_blank"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/in/benfok/" target="_blank"><FaLinkedin /></a>
                        <a href="mailto:benfok8@gmail.com"><MdAlternateEmail /></a>
                </div>
        )
    }
}

export default SocialLinks;