import "./App.css";
import React, { useEffect, useState } from "react";
import { MessageList } from "./components/MessageList/MessageList";
import { Form } from "./components/Form/Form";
import { AUTHORS } from "./utils/constants";

function App() {

    const [messages, setMessages] = useState([]);

    const addMessage = (newMsg) => {
        setMessages([...messages, newMsg]);
    }

    const sendMessage = (text) => {
        addMessage({
            author: AUTHORS.human,
            text,
        });
    };

    useEffect(() => {
        let timeout;
        if (messages[messages.length - 1]?.author === AUTHORS.human) {
            timeout = setTimeout(() => {
                addMessage({ author: AUTHORS.robot, text: "Hello, friend!" });
            }, 1500);
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [messages]);

    return (
            <div className="App">
                <MessageList messages={messages} />
                <Form onSubmit={sendMessage} />
            </div>
    );
}

export default App;
