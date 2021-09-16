import React from "react";

export function CounterButton(props) {
    <button id="counterButton" onClick={() => setCount(count - 1)}>
        {props.children}
    </button>
}