import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Route, Routes, NavLink} from "react-router-dom";

import "./App.css";
import "./components/Example/Example";

import { Home } from "./screens/Home/Home";
import { Chat } from "./screens/Chat/Chat";
import { ChatList } from "./components/ChatList/ChatList";
import {initialChats} from "./utils/constants";
import {ThemeContext} from "./utils/ThemeContext";
import {Profile} from "./screens/Profile/Profile";
import { addChat, deleteChat } from "./store/chats/actions";

const initMessages = initialChats.reduce((acc, chat) => {
    acc[chat.id] = [];
    return acc;
}, {});

function App() {
    // const [chats, setChats] = useState(initialChats); // не будем хранить их в стейте, а будем получать из стора
    const chats = useSelector(state => state.chats);
    const dispatch = useDispatch();
    const [messages, setMessages] = useState(initMessages);
    const [theme, setTheme] = useState('dark');

    const addMessage = (newMsg, id) => {
        setMessages({ ...messages, [id]: [...messages[id], newMsg] });
    };
    
    const addNewChat = (newChat) => {
        // setChats((prevChats) => [...prevChats, newChat]);
        dispatch(addChat(newChat));
        setMessages((prevMessages) => ({ ...prevMessages, [newChat.id]: [] }));
    };

    const removeChat = (id) => {
        // setChats((prevChats) => prevChats.filter((chat) => chat.id !== id));
        dispatch(deleteChat(id));
        setMessages((prevMessages) => {
            const newMessages = {...prevMessages};
            delete newMessages[id];

            return newMessages;
        });
    }

    const toggleLinkStyle = ({ isActive }) => ({ color: isActive ? "green" : "blue" });

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    return (
            <ThemeContext.Provider value={{ theme, changeTheme: toggleTheme }}>
                <BrowserRouter>
                    {/*Для чего нужен context: эта кнопка и Message не связаны общим родителем, нужно передать данные в компонент Message*/}
                    {/*<Button className={"Button"}  variant={"outlined"} onClick={() => setTheme(
                    (prevTheme) => (prevTheme === "dark" ? "light" : "dark")
                )}>
                    Сменить тему
                </Button>*/}
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
                            <Route path="/chat" element={<ChatList chats={chats} addChat={addNewChat} deleteChat={removeChat} />}>
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

// for commit & PR to lesson6 branch