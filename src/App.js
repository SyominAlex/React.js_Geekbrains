import "./App.css";
import React, {useState} from "react";
import { Message } from "./components/Message/Message";
// import { Counter } from "./components/Example/Example";

const name = "Syomin Alex";

const msgs = [
    {
        author: name,
        text: "text1",
    },
    {
        author: name,
        text: "text2",
    },
];

function App() {
    // const [rand, setRand] = useState(0);
    const [messages, setMessages] = useState(msgs);

    // const updateRand = () => {
    //     setRand(Math.random());
    // };

    const addMessage = () => {
        // messages.push() - недопустимо так мутировать стейт во избежание сюрпризов
        setMessages([...messages, { text: "new message", author: "author" }]);
    }

    return (
        <div className="App">
            {/*<Counter randomNumber={rand} />
            <button onClick={updateRand}>Update random</button>*/}
            {/*<Message author={name} text="text1" />
            <Message author={name} text="text2" />*/}
            {messages.map((msg) => (
                <Message text={msg.text} author={msg.author} />
            ))} {/*Warning: Each child in a list should have a unique "key" prop. Check the render method of `App`*/}
            <button onClick={addMessage}>Add message</button>
        </div>
    );
}

export default App;
