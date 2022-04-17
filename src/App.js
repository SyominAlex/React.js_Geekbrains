import "./App.css";
import React, {useState} from "react";
import {BrowserRouter, Route, Routes, NavLink} from "react-router-dom";
import { Home } from "./screens/Home/Home";
import { Chat } from "./screens/Chat/Chat";
import { ChatList } from "./components/ChatList/ChatList";
import {initialChats} from "./utils/constants";
import { Button } from "@mui/material";
import {ThemeContext} from "./utils/ThemeContext";


const initMessages = initialChats.reduce((acc, chat) => {
    acc[chat.id] = [];
    return acc;
}, {});

function App() {
    const [chats, setChats] = useState(initialChats);
    const [messages, setMessages] = useState(initMessages);
    const [theme, setTheme] = useState('dark');

    const addMessage = (newMsg, id) => {
        setMessages({ ...messages, [id]: [...messages[id], newMsg] });
    };
    
    const addChat = (newChat) => {
        setChats((prevChats) => [...prevChats, newChat]);
        setMessages((prevMessages) => ({ ...prevMessages, [newChat.id]: [] }));
    };

    const deleteChat = (id) => {
        setChats((prevChats) => prevChats.filter((chat) => chat.id !== id));
        setMessages((prevMessages) => {
            const newMessages = {...prevMessages};
            delete newMessages[id];

            return newMessages;
        });
    }

    const navLinkStyle = ({ isActive }) => ({ color: isActive ? "green" : "blue" });

    return (
        <ThemeContext.Provider value={theme}>
            <BrowserRouter>
                {/*Для чего нужен context: эта кнопка и Message не связаны общим родителем, нужно передать данные в компонент Message*/}
                <Button className={"Button"}  variant={"outlined"} onClick={() => setTheme(
                    (prevTheme) => (prevTheme === "dark" ? "light" : "dark")
                )}>
                    Сменить тему
                </Button>
                <ul>
                    <li>
                        <NavLink to="/" style={ navLinkStyle }>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/chat" style={ navLinkStyle }>Chat</NavLink>
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
        </ThemeContext.Provider>
    );
}

export default App;
