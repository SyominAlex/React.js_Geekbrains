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
                    <Route path="/chat" element={<ChatList chats={chats} />}>
                        <Route path=":id" element={<Chat messages={messages} addMessage={addMessage} />} />
                    </Route>
                    <Route path="*" element={<h4>404</h4>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

// for commit & PR to lesson6 branch