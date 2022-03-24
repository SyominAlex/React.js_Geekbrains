import "./App.css";
import React from "react";
import { Message } from "./components/Message";

const name = "Syomin Alex";

function App() {
    const foo = () => {
        alert("Hello");
    };
    return (
        <div className="App">
            <Message name={name} asd={30 + 2} doSmth={foo} bold={true} />
            <Message name="My Best Friend" asd={30 + 10} doSmth={foo} />
        </div>
    );
}

export default App;
