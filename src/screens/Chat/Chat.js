import {useEffect, useMemo, useRef} from "react";
import {AUTHORS} from "../../utils/constants";
import {MessageList} from "../../components/MessageList/MessageList";
import {Form} from "../../components/Form/Form";
import {useParams, Navigate} from "react-router-dom";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
// import {selectMessages} from "../../store/messages/selectors";
import {addMessage} from "../../store/messages/actions";
import {selectMessagesByChatId} from "../../store/messages/selectors";

export function Chat() { // messages, addMessage

    const { id } = useParams();
    // const messages = useSelector(selectMessages);
    // не нужно создавать новую функцию selectMessagesByChatId каждый раз, а только когда изменится id чата - воспользуемся замечательным хуком useMemo
    // useMemo выполнит коллбэк, который ему передали, и вернет результат его выполнения в переменную,
    // запомнит результат выполнения функции (ссылку на нее) и будет ее перевычислять только если что-то изменится в его массиве зависимостей, как useEffect
    const getMessages = useMemo(() => selectMessagesByChatId(id), [id]);
    const messages = useSelector(getMessages); // селектор возвращает уже не объект сообщений, а массив
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
        const lastMessage = messages?.[messages?.length - 1];
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

    if (!messages) {
        return <Navigate to="chat" replace/>
    }

    return (
        <div id="messages">
            <MessageList messages={messages}/>
            <Form onSubmit={sendMessage}/>
        </div>
    );
}