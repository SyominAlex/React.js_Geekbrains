import {Message} from "../Message/Message";
import React from "react";

export const MessageList = ({ messages }) => (
    messages.map((msg) => (
        <Message text={msg.text} author={msg.author} />
    ))
);