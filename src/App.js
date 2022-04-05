import "./App.css";
import React, {useEffect, useRef, useState} from "react";
import { MessageList } from "./components/MessageList/MessageList";
import { Form } from "./components/Form/Form";
import {AUTHORS, CHATS} from "./utils/constants";
import {ChatList} from "./components/ChatList/ChatList";

function App() {

    const [messageList, setMessageList] = useState([]);

    const timeout = useRef(0);

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
                <ChatList chatList={CHATS} />
                <div>
                    <MessageList messageList={messageList} />
                    <Form onSubmit={sendMessage} />
                </div>
            </div>
    );
}

export default App;
