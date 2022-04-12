import {useEffect, useRef, useState} from "react";
import {AUTHORS, CHATS} from "../../utils/constants";
import {MessageList} from "../../components/MessageList/MessageList";
import {Form} from "../../components/Form/Form";
import {useParams} from "react-router-dom";
import * as React from "react";

export function Chat() {

    const {id} = useParams();

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
        <div id="messages">
            <MessageList messageList={messageList}/>
            <Form onSubmit={sendMessage}/>
        </div>
    );
}