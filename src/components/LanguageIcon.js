import React from "react";

const LanguageIcon = ({icon, text}) => {
    return (
        <div className="icon-wrapper">
            <div className="language-icon">{icon}</div>
            <p className="language-text">{text}</p>
        </div>
    )
}

export default LanguageIcon;