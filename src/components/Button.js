import React  from "react";

const Button = (props) => {
    return (
        <a href={props.src} target="_blank" rel="noreferrer">
            <button className="btn">{props.text}</button>
        </a>
    )
}

export default Button;