import React from "react";

function Form (props) {
    return (
        <>
            <div>
        <p>{props.children}</p>
            <input type="text"/>
        </div>
        </>
    )
}

export default Form;