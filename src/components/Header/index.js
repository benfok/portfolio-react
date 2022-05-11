import { React, useState } from 'react';
import NavBar from './NavBar';
import MobileNavBar from './MobileNavBar';
import MenuOpenButton from './MenuOpenButton';
import MenuCloseButton from './MenuCloseButton';
import Button from '../Button';
import useMedia from '../../hooks/useMedia';
import { PageProvider } from '../../contexts/PageContext';
import '../../styles/header.css';



function Header() {
    
    // add state for mobile menu
    const [isOpen, setOpen ] = useState(false);

    // function to toggle state of mobile menu
    const toggleMobileNav = () => {
        setOpen(!isOpen)
    }

    // leverage custom hook to determine media size for menu change
    const isMobile = useMedia('(max-width: 998px)');

    // wrapping the header with the page provider to hold and pass the global state of the current page.
    return (
        <PageProvider>
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
        </PageProvider>
    )

}

export default Header;