import {Message} from "../Message/Message";
import React from "react";

export const MessageList = ({ messageList }) => (
    messageList.map((msg) => (
        <Message text={msg.text} author={msg.author} />
    ))
);