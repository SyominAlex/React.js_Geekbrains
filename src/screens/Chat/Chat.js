import {useEffect, useRef} from "react";
import {AUTHORS} from "../../utils/constants";
import {MessageList} from "../../components/MessageList/MessageList";
import {Form} from "../../components/Form/Form";
import {useParams, Navigate} from "react-router-dom";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectMessages} from "../../store/messages/selectors";
import {addMessage} from "../../store/messages/actions";

export function Chat() { // messages, addMessage

    const { id } = useParams();
    const messages = useSelector(selectMessages);
    const dispatch = useDispatch();
    const timeout = useRef(0);

    const sendMessage = (text) => {
        dispatch(
            addMessage(
        {
                    author: AUTHORS.human,
                    text,
                    id: `msg-${Date.now()}`,
                },
                id)
        );
    };

    useEffect(() => {
        // не добавлялись сообщения от робота, т.к. шла проверка без учета чатика
        const lastMessage = messages[id]?.[messages[id]?.length - 1];
        if (lastMessage?.author === AUTHORS.human) {
            timeout.current = setTimeout(() => {
                dispatch(
                    addMessage({
                        author: AUTHORS.robot,
                        text: "Hello, friend!",
                        id: `msg-${Date.now()}`,
                    }, id)
                )
            }, 1500);
        }

        return () => {
            clearTimeout(timeout.current);
        };
    }, [messages]);

    if (!messages[id]) {
        return <Navigate to="chat" replace/>
    }

    return (
        <div id="messages">
            <MessageList messages={messages[id]}/>
            <Form onSubmit={sendMessage}/>
        </div>
    );
}