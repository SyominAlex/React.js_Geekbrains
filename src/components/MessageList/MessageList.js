import {Message} from "../Message/Message";

export const MessageList = ({ messages }) => (
    messages.map((msg) => (
        <Message key={msg.id} text={msg.text} author={msg.author} />
    ))
);