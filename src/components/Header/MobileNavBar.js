import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import SocialLinks from '../SocialLinks';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
const MobileNavBar = ({toggleMobileNav}) => {
  
  const [ currentPage, setCurrentPage ] = useState('Home');

    const closeMenu = page => {
        setCurrentPage(page);
        toggleMobileNav();
    } 

  return (
    <div className="mobile-nav">
        <ul>
        <li className="mobile-nav-item">
            <Link
            to="/"
            onClick={() => closeMenu('Home') }
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            >
            Home
            </Link>
        </li>
        <li className="mobile-nav-item">
            <Link
            to="/about"
            onClick={() => closeMenu('About')}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
            About
            </Link>
        </li>
        <li className="mobile-nav-item">
            <Link
            to="/portfolio"
            onClick={() => closeMenu('Portfolio')}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
            Portfolio
            </Link>
        </li>
        <li className="mobile-nav-item">
            <Link
            to="/contact"
            onClick={() => closeMenu('Contact')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
            Contact
            </Link>
        </li>
        </ul>
        <div className="mobile-links-container">
            <IconContext.Provider value={{ className: "mobile-social-link" }}>
                <SocialLinks />
            </IconContext.Provider>
        </div>
    </div>
  );
}

export default MobileNavBar;
