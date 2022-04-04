import "./App.css";
import React, { useEffect, useState } from "react";
import { MessageList } from "./components/MessageList/MessageList";
import { Form } from "./components/Form/Form";
import { AUTHORS } from "./utils/constants";

function App() {

    const [messageList, setMessageList] = useState([]);
    const [flag, setFlag] = useState(false);

    const addMessage = (newMsg) => {
        setMessageList([...messageList, newMsg]);
    }

    const sendMessage = (text) => {
        addMessage({
            author: AUTHORS.human,
            text,
        });
    };

    useEffect(() => {
        let timeout;
        if (messageList[messageList.length - 1]?.author === AUTHORS.human) {
            timeout = setTimeout(() => {
                addMessage({ author: AUTHORS.robot, text: "Hello, friend!" });
            }, 1500);
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [messageList]);

    return (
            <div className="App">
                <MessageList messageList={messageList} />
                {flag ? (
                    <div>
                        <Form onSubmit={sendMessage} />
                    </div>
                ) : (
                    <div>
                        <Form onSubmit={sendMessage} />
                    </div>
                )} {/* если меняем корневой элемент поддерева, учитываем, что всё поддерево будет размонтировано, а если не меняем - по факту в VirtualDOM ничего не меняется */}
                <button onClick={() => setFlag(!flag)}>click</button>
            </div>
    );
}

export default App;
