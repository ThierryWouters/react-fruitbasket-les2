import React from "react";
import Counter from "./Counter";

function Fruitcomponent (props) {
    return (
    <>
    <div className="Fruitcomponent">
        <h2>{props.children}</h2>
        <Counter originalValue={props.originalValue}></Counter>
    </div>
    </>
    )
}

export default Fruitcomponent;