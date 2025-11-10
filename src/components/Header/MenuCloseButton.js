import React from 'react';
import { FaTimes } from 'react-icons/fa';

const MenuCloseButton = ({toggleMobileNav}) => {
    return (
        <button id="menu-icon" onClick={toggleMobileNav}>
            <FaTimes  title="Close Menu" />
        </button>
    )
}

export default MenuCloseButton;