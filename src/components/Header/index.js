import { React, useState, useEffect } from 'react';
import NavBar from './NavBar';
import MobileNavBar from './MobileNavBar';
import MenuOpenButton from './MenuOpenButton';
import MenuCloseButton from './MenuCloseButton';
import useMedia from '../../hooks/useMedia';
import SocialLinks from '../SocialLinks';
import '../../styles/header.css';
import Button from '../Button';



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
            {isOpen && <MobileNavBar toggleMobileNav={toggleMobileNav} />}
            <div id="header-left">
                <p id="logo">BF</p>
            </div>
            <div id="header-center">
                {!isMobile && <NavBar />}
            </div>
            <div id="header-right">
                {!isOpen && isMobile && <MenuOpenButton toggleMobileNav={toggleMobileNav} />}
                {isOpen && <MenuCloseButton toggleMobileNav={toggleMobileNav} />}
                {!isMobile && <Button src={'#'} text={'Resume'} />}
            </div>
        </header>
    )

}

export default Header;