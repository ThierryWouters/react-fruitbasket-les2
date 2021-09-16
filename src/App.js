import React, {useState} from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

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
            <h1>Fruitmand bezorgservice</h1>
            <form>
            <div>
                <h2>
                    &#127827; Aardbeien
                    <button id="strawberry_min" type="button" onClick={minCount}>-</button>
                    <p>{count}</p>
                    <button id="strawberry_plus" type="button" onClick={plusCount}>+</button>
                </h2>
            </div>
        </form>
            <div>
                <h2>
                    &#127820; Bananen
                    <button id="banana_min" type="button" onClick={minCount}>-</button>
                    <p>{count}</p>
                    <button id="banana_plus" type="button" onClick={plusCount}>+</button>
                </h2>
            </div>

            <div>
                <h2>
                    &#127823; Appels
                    <button id="apple_min" type="button" onClick={() => setCount(count - 1)}>-</button>
                    <p>{count}</p>
                    <button id="apple_plus" type="button" onClick={() => setCount(count + 1)}>+</button>
                </h2>
            </div>

            <div>
                <h2>
                    &#129373; Kiwi's
                    <button id="kiwi_min" type="button" onClick={() => setCount(count - 1)}>-</button>
                    <p>{count}</p>
                    <button id="kiwi_plus" type="button" onClick={() => setCount(count + 1)}>+</button>
                </h2>
            </div>

        </>
    );
}

export default App;
