<<<<<<< HEAD
import React, {useState} from "react";
import {BrowserRouter, Route, Routes, NavLink} from "react-router-dom";

import "./App.css";
import "./components/Example/Example";

import {Home} from "./screens/Home/Home";
import {Chat} from "./screens/Chat/Chat";
import {ChatList} from "./components/ChatList/ChatList";
import {ThemeContext} from "./utils/ThemeContext";
import {ProfileContainer} from "./screens/Profile/ProfileContainer";
=======
import React, {useState} from "react";
import { Provider } from "react-redux";
import {BrowserRouter, Route, Routes, NavLink} from "react-router-dom";
// import { Button } from "@mui/material";

import "./App.css";
<<<<<<< HEAD
import React, {useState} from "react";
import {BrowserRouter, Route, Routes, NavLink} from "react-router-dom";
=======
import "./components/Example/Example";
>>>>>>> lesson5
import { Home } from "./screens/Home/Home";
import { Chat } from "./screens/Chat/Chat";
import { ChatList } from "./components/ChatList/ChatList";
import {initialChats} from "./utils/constants";
<<<<<<< HEAD
=======
import {ThemeContext} from "./utils/ThemeContext";
import {Profile} from "./screens/Profile/Profile";
import {store} from "./store";
>>>>>>> lesson5

const initMessages = initialChats.reduce((acc, chat) => {
    acc[chat.id] = [];
    return acc;
}, {});

function App() {
    const [chats, setChats] = useState(initialChats);
    const [messages, setMessages] = useState(initMessages);
<<<<<<< HEAD

    const addMessage = (newMsg, id) => {
        setMessages({ ...messages, [id]: [...messages[id], newMsg] });
    }
=======
    const [theme, setTheme] = useState('dark');

    const addMessage = (newMsg, id) => {
        setMessages({ ...messages, [id]: [...messages[id], newMsg] });
    };
>>>>>>> lesson5
    
    const addChat = (newChat) => {
        setChats((prevChats) => [...prevChats, newChat]);
        setMessages((prevMessages) => ({ ...prevMessages, [newChat.id]: [] }));
<<<<<<< HEAD
    }
=======
    };
>>>>>>> lesson5
>>>>>>> main

function App() {
    const [theme, setTheme] = useState('dark');
    // в итоге App содержит только тему (для демонстрационных целей) и роутинг
    const toggleLinkStyle = ({ isActive }) => ({ color: isActive ? "green" : "blue" });

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

<<<<<<< HEAD
    return (
<<<<<<< HEAD
            <ThemeContext.Provider value={{ theme, changeTheme: toggleTheme }}>
                <BrowserRouter>
=======
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
=======
    const toggleLinkStyle = ({ isActive }) => ({ color: isActive ? "green" : "blue" });

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    return (
        <Provider store={store}>
            <ThemeContext.Provider value={{ theme, changeTheme: toggleTheme }}>
                <BrowserRouter>
                    {/*Для чего нужен context: эта кнопка и Message не связаны общим родителем, нужно передать данные в компонент Message*/}
                    {/*<Button className={"Button"}  variant={"outlined"} onClick={() => setTheme(
                    (prevTheme) => (prevTheme === "dark" ? "light" : "dark")
                )}>
                    Сменить тему
                </Button>*/}
>>>>>>> main
                    <ul>
                        <li>
                            <NavLink to="/" style={ toggleLinkStyle }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/chat" style={ toggleLinkStyle }>Chat</NavLink>
                        </li>
                        <li>
                            <NavLink to="/profile" style={ toggleLinkStyle }>Profile</NavLink>
                        </li>
                    </ul>
                    <div className="App">
                        <Routes>
                            <Route path="/" element={<Home />} />
<<<<<<< HEAD
                            <Route path="/profile" element={<ProfileContainer />} />
                            <Route path="/chat" element={<ChatList />}>
                                <Route path=":id" element={<Chat />} />
=======
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/chat" element={<ChatList chats={chats} addChat={addChat} deleteChat={deleteChat} />}>
                                <Route path=":id" element={<Chat messages={messages} addMessage={addMessage} />} />
>>>>>>> main
                            </Route>
                            <Route path="*" element={<h4>404</h4>} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </ThemeContext.Provider>
<<<<<<< HEAD
=======
        </Provider>
>>>>>>> lesson5
>>>>>>> main
    );
}

export default App;
