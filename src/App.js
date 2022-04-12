import "./App.css";
import React from "react";
import {BrowserRouter, Route, Routes, NavLink} from "react-router-dom";
import { Chat } from "./screens/Chat/Chat";
import { ChatList } from "./components/ChatList/ChatList";
import {CHATS} from "./utils/constants";

const Home = () => <h4>Home page</h4>;

function App() {
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
                    <Route path="/chat" element={<ChatList chatList={CHATS} />}>
                        <Route path=":id" element={<Chat />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
