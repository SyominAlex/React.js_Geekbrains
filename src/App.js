import React, {useState} from "react";
import {BrowserRouter, Route, Routes, NavLink} from "react-router-dom";

import "./App.css";
import "./components/Example/Example";

import {Home} from "./screens/Home/Home";
import {Chat} from "./screens/Chat/Chat";
import {ChatList} from "./components/ChatList/ChatList";
import {ThemeContext} from "./utils/ThemeContext";
import {Profile} from "./screens/Profile/Profile";

const initMessages = initialChats.reduce((acc, chat) => {
    acc[chat.id] = [];
    return acc;
}, {});

function App() {
<<<<<<< HEAD
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
=======
    const [theme, setTheme] = useState('dark');
    // в итоге App содержит только тему (для демонстрационных целей) и роутинг
    const toggleLinkStyle = ({ isActive }) => ({ color: isActive ? "green" : "blue" });

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    return (
            <ThemeContext.Provider value={{ theme, changeTheme: toggleTheme }}>
                <BrowserRouter>
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
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/chat" element={<ChatList />}>
                                <Route path=":id" element={<Chat />} />
                            </Route>
                            <Route path="*" element={<h4>404</h4>} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </ThemeContext.Provider>
>>>>>>> lesson6
    );
}

export default App;
