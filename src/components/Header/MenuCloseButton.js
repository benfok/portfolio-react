import React from 'react';
import { FaTimes } from 'react-icons/fa';

const MenuCloseButton = ({toggleMobileNav}) => {
    return (
        <a id="menu-icon" href="#" onClick={toggleMobileNav}>
            <FaTimes  title="Close Menu" />
        </a>
    )
}

export default MenuCloseButton;