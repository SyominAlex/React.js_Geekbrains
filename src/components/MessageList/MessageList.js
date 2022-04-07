import {Message} from "../Message/Message";

export const MessageList = ({ messageList }) => (
    messageList.map((msg) => (
        <Message key={msg.id} text={msg.text} author={msg.author} />
    ))
);