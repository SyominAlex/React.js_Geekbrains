import {Message} from "../Message/Message";

export const MessageList = ({ messages, theme }) => (
    messages.map((msg) => (
        <Message theme={theme} key={msg.id} text={msg.text} author={msg.author} />
    ))
);