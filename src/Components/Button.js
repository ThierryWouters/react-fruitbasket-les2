import React from "react";


function Button (props) {
    return (
    <button className="counterButton" onClick={props.clickHandler}>
        {props.children}
    </button>
    )
}

export default Button;