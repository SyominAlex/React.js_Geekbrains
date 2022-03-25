import "./App.css";
import React from "react";
import { Message } from "./components/Message";
import { Counter } from "./components/Example/Example";

const name = "Syomin Alex";

function App() {
    const foo = () => {
        alert("Hello");
    };
    return (
        <div className="App">
            <Counter />
            <Message name={name} age={30 + 2} doSmth={foo} bold={true} />
            <Message name="My Best Friend" age={30 + 10} doSmth={foo} />
        </div>
    );
}

export default App;
