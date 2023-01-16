import React, { useState } from 'react';
import NavBar from './NavBar';
import MobileNavBar from './MobileNavBar';
import MenuOpenButton from './MenuOpenButton';
import MenuCloseButton from './MenuCloseButton';
import useMedia from '../../hooks/useMedia';
import '../../styles/header.css';
import ThemeMenu from './ThemeMenu';
import { Link } from 'react-router-dom';
import { usePageContext } from '../../contexts/PageContext';


const Header = () => {
    
    // bring in page context for logo link
    const { setCurrentPage } = usePageContext();

    // add state for mobile menu
    const [isOpen, setOpen ] = useState(false);

    // function to toggle state of mobile menu
    const toggleMobileNav = () => {
        // removes fixed from body and allows scrolling again
        document.getElementById('react-content-container').className = 'container';
        setOpen(!isOpen)
    }

    // leverage custom hook to determine media size for menu change
    const isMobile = useMedia('(max-width: 998px)');

    // wrapping the header with the page provider to hold and pass the global state of the current page.
    return (
        <header>
            {isOpen && <MobileNavBar toggleMobileNav={toggleMobileNav} />}
            <div id="header-left">
                <Link
                    to="/about"
                    onClick={() => setCurrentPage('About')}
                >
                    <p id="logo">BF</p>
                </Link>
            </div>
            <div id="header-center">
            </div>
            <div id="header-right">
                {!isMobile && <NavBar />} 
                {/* If a desktop function (such as resume button) moves into the right container, move navbar to center */}
                {!isOpen && isMobile && <MenuOpenButton toggleMobileNav={toggleMobileNav} />}
                {isOpen && 
                    <>
                        <ThemeMenu />
                        <MenuCloseButton toggleMobileNav={toggleMobileNav} />
                    </>
                }
            </div>
        </header>
    )

}

export default Header;