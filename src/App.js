import "./App.css";
import React, {useEffect, useRef, useState} from "react";
import { MessageList } from "./components/MessageList/MessageList";
import { Form } from "./components/Form/Form";
import { AUTHORS } from "./utils/constants";
import VirtualizedList from "./components/ChatList/ChatList";

function App() {

    const [messageList, setMessageList] = useState([]);

    const timeout = useRef();

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
        if (messageList[messageList.length - 1]?.author === AUTHORS.human) {
            timeout.current = setTimeout(() => {
                addMessage({
                    author: AUTHORS.robot,
                    text: "Hello, friend!",
                    id: `msg-${Date.now()}`,
                });
            }, 1500);
        }

        return () => {
            clearTimeout(timeout.current);
        };
    }, [messageList]);

    return (
            <div className="App">
                <VirtualizedList />
                <MessageList messageList={messageList} />
                <Form onSubmit={sendMessage} />
            </div>
    );
}

export default App;
