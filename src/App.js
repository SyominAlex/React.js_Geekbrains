import "./App.css";
import React, {useState} from "react";
import { Message } from "./components/Message/Message";
import { Counter } from "./components/Example/Example";

const name = "Syomin Alex";

function App() {
    const [rand, setRand] = useState(0); // пример удобства использования useEffect()

    const updateRand = () => {
        setRand(Math.random());
    };

    const foo = () => {
        alert("Hello");
    };
    return (
        <div className="App">
            <Counter randomNumber={rand} />
            <button onClick={updateRand}>Update random</button>
            <Message name={name} age={30 + 2} doSmth={foo} bold={true} />
            <Message name="My Best Friend" age={30 + 10} doSmth={foo} />
        </div>
    );
}

export default App;
