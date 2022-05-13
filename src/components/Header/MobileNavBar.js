import React from 'react';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import SocialLinks from '../SocialLinks';
import { usePageContext } from '../../contexts/PageContext';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
const MobileNavBar = ({toggleMobileNav}) => {
  
const { currentPage, setCurrentPage } = usePageContext();

    const closeMenu = page => {
        setCurrentPage(page);
        toggleMobileNav();
    } 

    (function blurContent() {
        console.log('blur');
        document.querySelector('main').className = 'isBlurred';
        document.querySelector('footer').className = 'isBlurred';
    })();

  return (
    <div className="mobile-nav" >
        <ul>
        {/* <li className="mobile-nav-item">
            <Link
            to="/"
            onClick={() => closeMenu('Home') }
            className="nav-link"
            >
            Home
            </Link>
        </li> */}
        <li className="mobile-nav-item">
            <Link
            to="/"
            onClick={() => closeMenu('About')}
            className="nav-link"
            >
            About
            </Link>
        </li>
        <li className="mobile-nav-item">
            <Link
            to="/portfolio"
            onClick={() => closeMenu('Portfolio')}
            className="nav-link"
            >
            Portfolio
            </Link>
        </li>
        <li className="mobile-nav-item">
            <Link
            to="/contact"
            onClick={() => closeMenu('Contact')}
            className="nav-link"
            >
            Contact
            </Link>
        </li>
        <li className="mobile-nav-item">
            <Link
            to="/resume"
            onClick={() => closeMenu('Contact')}
            className="nav-link"
            >
            Resume
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
