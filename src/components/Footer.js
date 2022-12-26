import React from 'react';
import { IconContext } from 'react-icons';
import SocialLinks from './SocialLinks';
import useMedia from '../hooks/useMedia';
import '../styles/footer.css';

const Footer = () => {

    // leverage custom hook to determine media size for menu change
    const isMobile = useMedia('(max-width: 1200px)');

    return (
        <>
            {isMobile &&
                <footer className="footer-mobile">
                    <IconContext.Provider value={{ className: "social-link" }}>
                        <SocialLinks />
                    </IconContext.Provider>
                    <p>© Tidy Lines LLC</p>
                </footer>
            }
            {!isMobile &&
                <footer>
                    <IconContext.Provider value={{ className: "social-link" }}>
                        <SocialLinks />
                    </IconContext.Provider>
                    <p>© Tidy Lines LLC</p>
                </footer>
            }
        </>
    )
}

export default Footer;