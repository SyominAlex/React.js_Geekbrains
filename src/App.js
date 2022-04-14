import "./App.css";
import React, {useState} from "react";
import {BrowserRouter, Route, Routes, NavLink} from "react-router-dom";
import { Home } from "./screens/Home/Home";
import { Chat } from "./screens/Chat/Chat";
import { ChatList } from "./components/ChatList/ChatList";
import {initialChats} from "./utils/constants";

function App() {
    const [chats, setChats] = useState(initialChats);

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
                    <Route path="/chat" element={<ChatList chatList={initialChats} />}>
                        <Route path=":id" element={<Chat />} />
                    </Route>
                    <Route path="*" element={<h4>404</h4>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
