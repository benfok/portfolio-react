import { React, useState, useEffect } from 'react';
import NavBar from './NavBar';
import MobileNavBar from './MobileNavBar';
import MenuOpenButton from './MenuOpenButton';
import MenuCloseButton from './MenuCloseButton';
import useMedia from '../../hooks/useMedia';
import SocialLinks from '../SocialLinks';
import '../../styles/header.css';



function Header() {
    
    // add state for mobile menu
    const [isOpen, setOpen ] = useState(false);

    // function to toggle state of mobile menu
    const toggleMobileNav = () => {
        setOpen(!isOpen)
    }

    const isMobile = useMedia('(max-width: 768px)');

    return (
        <header>
            <div id="logo-container">
                <p id="logo">BF</p>
            </div>
            {isOpen && <MobileNavBar />}
            {!isOpen && !isMobile && <NavBar />}
            {!isOpen && isMobile && <MenuOpenButton toggleMobileNav={toggleMobileNav} />}
            {isOpen && <MenuCloseButton toggleMobileNav={toggleMobileNav} />}
        </header>
    )

}

export default Header;