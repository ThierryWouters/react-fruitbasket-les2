import React, {useState} from 'react';
import './App.css';
import Fruitcomponent from "./Components/Fruitcomponent";
import Form from "./Components/Form";

function App() {
    const [strawberry, setStrawberries] = React.useState(0);
    const [banana, setBananas ] = React.useState(0);
    const [apple, setApples ] = React.useState(0);
    const [kiwi, setKiwis ] = React.useState(0);

    function resetValue () {
        setStrawberries (0);
        setBananas (0);
        setApples (0);
        setKiwis (0);
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <Fruitcomponent originalValue={strawberry}>&#127827; Aardbeien</Fruitcomponent>
            <Fruitcomponent originalValue={banana}>&#127820; Bananen</Fruitcomponent>
            <Fruitcomponent originalValue={apple}>&#127823; Appels</Fruitcomponent>
            <Fruitcomponent originalValue={kiwi}>&#129373; Kiwi's</Fruitcomponent>

            {/*Button werkt niet kan helaas niet helemaal vinden waar het probleem zit*/}
            <button type="button" onClick={ () => resetValue() }>Reset</button>

            {/*Helaas vanwege tijd gebrek dit niet werkend meer kunnen maken, radio buttons hebben niet de gewenste functionaliteit*/}
           <Form id="firstName">Voornaam</Form>
            <Form id="lastName">Achternaam</Form>
            <Form id="age">Leeftijd</Form>
            <Form id="zipCode">Postcode</Form>

            <div>
            <input type="radio" id="day" name="day" value="Overdag"/>
                <label for="day">Overdag</label>
            </div>
            <div>
                <input type="radio" id="night" name="night" value="'s Avonds"/>
                <label for="night">'s Avonds</label>
            </div>

            <label for="accept">
                <input type="checkbox" id="accept" name="accept" value="akkoord"/>
                Ik ga akkoord met de voorwaarden
            </label>




        </>
    );
}

export default App;
