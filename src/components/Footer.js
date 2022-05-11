import React from 'react';
import { IconContext } from 'react-icons';
import SocialLinks from './SocialLinks';
import '../styles/footer.css';

class Footer extends React.Component {
    render () {
        return (
            <footer>
                <IconContext.Provider value={{ className: "social-link" }}>
                    <SocialLinks />
                </IconContext.Provider>
                <p>© Tidy Lines LLC</p>
            </footer>
        )
    }
}

export default Footer;