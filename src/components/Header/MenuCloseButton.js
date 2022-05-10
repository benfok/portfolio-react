import React from 'react';
import { FaTimes } from 'react-icons/fa';

const MenuCloseButton = ({toggleMobileNav}) => {
    return (
        <a id="menu-icon" href="#" onClick={toggleMobileNav}>
            <FaTimes />
        </a>
    )
}

export default MenuCloseButton;