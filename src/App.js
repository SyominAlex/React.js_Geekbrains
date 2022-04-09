import "./App.css";
import React, {useEffect, useRef, useState} from "react";
import { MessageList } from "./components/MessageList/MessageList";
import { Form } from "./components/Form/Form";
import { ExampleForm } from "./components/Example/Example";
import {AUTHORS, CHATS} from "./utils/constants";
import {ChatList} from "./components/ChatList/ChatList";
import {TextField} from "@mui/material";

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
                <div id="messages">
                    <MessageList messageList={messageList} />
                    <Form onSubmit={sendMessage} />
                </div>
                {/*паттерн render prop - вместо чилдренов используется рендер render={}*/}
                <ExampleForm
                    onSubmit={() => {}}
                    render={({ value, handleChange }) => (
                    <TextField
                        style={{ margin: '20px' }}
                        id="outlined-basic"
                        label="Сообщение"
                        variant="outlined"
                        value={value}
                        onChange={handleChange}
                        // inputRef={inputRef}
                    />
                )}>
                </ExampleForm>
                {/* мы можем передать сюда любой текстовый input, для формы не важно какой, она будет эту логику применять,
                какой бы мы инпут сюда ни передали, даже обычный html input, можем передавать начальные значения initialValues, массив или объект values,
                для каждого инпута находилось бы свое value. Родительский компонент решает какие будут значения, он может проигнорировать какие-то из этих пропсов.
                 Такой подход применяется чаще всего в формах, например, набирающая популярность библиотека react final form или formic (вся логика на стороне этой библиотеки). */}
                <ExampleForm
                    onSubmit={() => {}}
                    render={({ value, handleChange }) => (
                        <input
                            style={{ margin: '20px' }}
                            id="outlined-basic"
                            value={value}
                            onChange={handleChange}
                        />
                    )}
                >
                </ExampleForm>
            </div>
    );
}

export default App;
