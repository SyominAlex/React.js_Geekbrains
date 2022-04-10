import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Chat } from "./screens/Chat/Chat";

const Home = () => <h4>Home page</h4>;

function App() {
    return (
        <BrowserRouter>
            <Link to="/">Home</Link>
            <Link to="/chat">Chat</Link>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
