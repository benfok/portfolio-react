import React, { useState } from 'react';
import { IconContext } from 'react-icons/lib';
import { MdColorLens } from 'react-icons/md';
import { BsCircleFill, BsCircleHalf } from 'react-icons/bs';
import { GiMoon } from 'react-icons/gi';
;
const ThemeMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const menuToggle = () => {
        setIsOpen(!isOpen);
        !isOpen ? document.getElementById('theme-icon').className= "theme-icon theme-open" : document.getElementById('theme-icon').className = "theme-icon" 
    }

    const setTheme = (theme) => {
        document.querySelector('body').className = theme;
        localStorage.setItem('theme', theme);
    }

    return (
        <>
            <div className="nav-theme" onClick={() => menuToggle()}>
                <div className="theme-icon"   id="theme-icon">
                    <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, size: '40px'}}>
                        <MdColorLens title="Choose Site Theme" />
                    </IconContext.Provider>
                </div>
            {isOpen && 
                <div className="theme-menu">
                    <div id="" onClick={(event) => setTheme(event.currentTarget.id)}>
                        <IconContext.Provider value={{ className: "theme-menu-icon theme-def" }}>
                            <BsCircleFill title="Default Mode Selection" />
                        </IconContext.Provider>
                    </div>
                    <div id="bw-mode" onClick={(event) => setTheme(event.currentTarget.id)}>
                        <IconContext.Provider value={{ className: "theme-menu-icon theme-bw" }}>
                            <BsCircleHalf title="Black and White Mode Selection" />
                        </IconContext.Provider>
                    </div>
                    <div id="dark-mode" onClick={(event) => setTheme(event.currentTarget.id)}>
                        <IconContext.Provider value={{ className: "theme-menu-icon theme-dark" }}>
                            <GiMoon title="Dark Mode Selection" />
                        </IconContext.Provider>
                    </div>
                </div>
            }
            </div>
        </>
    )
}

export default ThemeMenu;