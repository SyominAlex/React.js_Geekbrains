import "./App.css";
import React, {useState} from "react";
import { Message } from "./components/Message/Message";
import { Form } from "./components/Form/Form";
// import { Counter } from "./components/Example/Example";

const name = "me";

const msgs = [
    {
        author: name,
        text: "text1",
    },
    {
        author: name,
        text: "text2",
    },
    {
        author: "robot",
        text: "message from robot",
    },
];

function App() {
    // const [rand, setRand] = useState(0);
    const [messages, setMessages] = useState(msgs);

    // const updateRand = () => {
    //     setRand(Math.random());
    // };

    const addMessage = (newText) => {
        // messages.push() - недопустимо так мутировать стейт во избежание сюрпризов
        setMessages([...messages, { text: newText, author: name }]);
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
                {/*<button onClick={addMessage}>Add message</button>*/}
            <Form onSubmit={addMessage} />
            </div>
    );
}

export default App;
