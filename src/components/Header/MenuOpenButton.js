import React from 'react';
import { FaBars } from 'react-icons/fa';

const MenuOpenButton = ({toggleMobileNav}) => {
    return (
        <a id="menu-icon" href="#" onClick={toggleMobileNav}>
            <FaBars />
        </a>
    )
}

export default MenuOpenButton;