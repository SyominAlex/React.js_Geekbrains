import { Message, MessageWithBlueColor, MessageWithGreenColor, MessageWithThemeContext } from "../Message/Message";

export const MessageList = ({ messages }) => (
    messages.map((msg) => (
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <Message key={msg.id} text={msg.text} author={msg.author} />
=======
>>>>>>> main
        // <Message key={msg.id} text={msg.text} author={msg.author} />
        // <MessageWithBlueColor key={msg.id} text={msg.text} author={msg.author} />
        // <MessageWithGreenColor key={msg.id} text={msg.text} author={msg.author} />
        <MessageWithThemeContext key={msg.id} text={msg.text} author={msg.author} />
<<<<<<< HEAD
=======
>>>>>>> lesson5
>>>>>>> main
    ))
);