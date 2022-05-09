import React, {useState} from "react";
import {BrowserRouter, Route, Routes, NavLink} from "react-router-dom";

import "./App.css";
import "./components/Example/Example";

import {Home} from "./screens/Home/Home";
import {Chat} from "./screens/Chat/Chat";
import {ChatList} from "./components/ChatList/ChatList";
import {ThemeContext} from "./utils/ThemeContext";
import {ProfileContainer} from "./screens/Profile/ProfileContainer.js";
import {Articles} from "./screens/Articles/Articles";
import {PrivateRoute} from "./components/PrivateRoute/PrivateRoute";
import {PublicRoute} from "./components/PublicRoute/PublicRoute";

function App() {
    const [theme, setTheme] = useState('dark');
    const [authed, setAuthed] = useState(false);

    const handleLogin = () => {
        setAuthed(true);
    };

    const handleLogout = () => {
        setAuthed(false);
    };

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
                        <li>
                            <NavLink to="/articles" style={ toggleLinkStyle }>Articles</NavLink>
                        </li>
                    </ul>
                    <div className="App">
                        <Routes>
                            <Route path="/" element={<PublicRoute authed={authed} />}>
                                <Route path="" element={<Home onAuth={handleLogin} />} />
                                <Route path="signup" element={<Home onAuth={handleLogin} isSignUp />} />
                            </Route>
                            <Route path="/profile" element={<PrivateRoute authed={authed} />}>
                                <Route path="" element={<ProfileContainer onLogout={handleLogout} />} />
                            </Route>
                            <Route path="/articles" element={<Articles />} />
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
