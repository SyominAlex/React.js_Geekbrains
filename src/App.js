import React, {useState} from "react";
import {BrowserRouter, Route, Routes, NavLink} from "react-router-dom";

import "./App.css";
import "./components/Example/Example";

import { Home } from "./screens/Home/Home";
import { Chat } from "./screens/Chat/Chat";
import { ChatList } from "./components/ChatList/ChatList";
import {ThemeContext} from "./utils/ThemeContext";
import {Profile} from "./screens/Profile/Profile";

function App() {
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
    );
}

export default App;
