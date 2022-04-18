import "./App.css";
import React, {useState} from "react";
import {BrowserRouter, Route, Routes, NavLink} from "react-router-dom";

import { Home } from "./screens/Home/Home";
import { Chat } from "./screens/Chat/Chat";
import { ChatList } from "./components/ChatList/ChatList";
import {initialChats} from "./utils/constants";

const initMessages = initialChats.reduce((acc, chat) => {
    acc[chat.id] = [];
    return acc;
}, {});

function App() {
    const [chats, setChats] = useState(initialChats);
    const [messages, setMessages] = useState(initMessages);

    const addMessage = (newMsg, id) => {
        setMessages({ ...messages, [id]: [...messages[id], newMsg] });
    }
    
    const addChat = (newChat) => {
        setChats((prevChats) => [...prevChats, newChat]);
        setMessages((prevMessages) => ({ ...prevMessages, [newChat.id]: [] }));
    }

    const deleteChat = (id) => {
        setChats((prevChats) => prevChats.filter((chat) => chat.id !== id));
        setMessages((prevMessages) => {
            const newMessages = {...prevMessages};
            delete newMessages[id];

            return newMessages;
        });
    }

    return (
        <BrowserRouter>
            <ul>
                <li>
                    <NavLink to="/" style={ ({ isActive }) => ({ color: isActive ? "green" : "blue" }) }>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/chat" style={ ({ isActive }) => ({ color: isActive ? "green" : "blue" }) }>Chat</NavLink>
                </li>
            </ul>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/chat" element={<ChatList chats={chats} addChat={addChat} deleteChat={deleteChat} />}>
                        <Route path=":id" element={<Chat messages={messages} addMessage={addMessage} />} />
                    </Route>
                    <Route path="*" element={<h4>404</h4>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
// empty commit for homework7