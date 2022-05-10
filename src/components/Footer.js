import React from 'react';
import { IconContext } from 'react-icons';
import SocialLinks from './SocialLinks';

class Footer extends React.Component {
    render () {
        return (
            <footer>
                <div>
                    <IconContext.Provider value={{ color: "red", size: "2em", className: "social-link" }}>
                        <SocialLinks />
                    </IconContext.Provider>
                </div>
                <p>© Tidy Lines LLC</p>
            </footer>
        )
    }
}

export default Footer;