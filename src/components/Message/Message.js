import "./Message.styles.css";

export const Message = ({ author, text }) => {
    return (
        <div className="message">
            <span>{author}: </span>
            <span>{text}</span>
        </div>
    );
};