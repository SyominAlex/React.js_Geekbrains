import "./App.css";
import React, { useEffect, useState } from "react";
import { MessageList } from "./components/MessageList/MessageList";
import { Form } from "./components/Form/Form";
import { AUTHORS } from "./utils/constants";

function App() {

    const [messageList, setMessageList] = useState([]);

    const addMessage = (newMsg) => {
        setMessageList([...messageList, newMsg]);
    }

    const sendMessage = (text) => {
        addMessage({
            author: AUTHORS.human,
            text,
            id: `msg-${Date.now()}`,
        });
    };

    useEffect(() => {
        let timeout;
        if (messageList[messageList.length - 1]?.author === AUTHORS.human) {
            timeout = setTimeout(() => {
                addMessage({
                    author: AUTHORS.robot,
                    text: "Hello, friend!",
                    id: `msg-${Date.now()}`,
                });
            }, 1500);
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [messageList]);

    return (
            <div className="App">
                <MessageList messageList={messageList} />
                <Form onSubmit={sendMessage} />
            </div>
    );
}

export default App;
