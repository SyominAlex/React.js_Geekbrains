import {useEffect, useRef, useState} from "react";
import {AUTHORS, CHATS, initMessages} from "../../utils/constants";
import {MessageList} from "../../components/MessageList/MessageList";
import {Form} from "../../components/Form/Form";
import {useParams, Navigate} from "react-router-dom";
import * as React from "react";

export function Chat() {

    const { id } = useParams();

    const [messageList, setMessageList] = useState(initMessages);

    const timeout = useRef(0);

    const addMessage = (newMsg) => {
        setMessageList({ ...messageList, [id]: [...messageList[id], newMsg] });
    }

    const sendMessage = (text) => {
        addMessage({
            author: AUTHORS.human,
            text,
            id: `msg-${Date.now()}`,
        });
    };

    useEffect(() => {
        // не добавлялись сообщения от робота, т.к. шла проверка без учета чатика
        const lastMessage = messageList[id]?.[messageList[id]?.length - 1];
        if (lastMessage?.author === AUTHORS.human) {
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

    if (!messageList[id]) {
        return <Navigate to="chat" replace />
    }

    return (
        <div id="messages">
            <MessageList messageList={messageList[id]}/>
            <Form onSubmit={sendMessage}/>
        </div>
    );
}