import "./Message.styles.css";

export const Message = ({ name, asd, bold }) => {
    return (
        <h1 className={"message" + (!bold ? " header" : "")}>
            I am a message: {name}, {asd} years old ;)
        </h1>
    );
};