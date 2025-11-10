import React from 'react';
import { FaBars } from 'react-icons/fa';

const MenuOpenButton = ({toggleMobileNav}) => {
    return (
        <button id="menu-icon" onClick={toggleMobileNav}>
            <FaBars title="Open Menu" />
        </button>
    )
}

export default MenuOpenButton;