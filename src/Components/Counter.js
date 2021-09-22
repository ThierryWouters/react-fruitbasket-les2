import React, {useState} from "react";
import Button from "./Button";

function Counter (props) {
    const [count, setCount] = React.useState(props.originalValue);

    const minCount = () => {
        if (count === 0) {
            return;
        }
        setCount(count - 1)
    }

    const plusCount = () => {
        setCount(count + 1)
    }

    return (
        <>
        <div className="counter">
            <Button clickHandler={minCount}>-</Button>
            <p>{count}</p>
            <Button clickHandler={plusCount}>+</Button>
        </div>
        </>
    )

}
export default Counter;