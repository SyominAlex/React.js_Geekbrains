import "./Message.styles.css";

export const Message = ({ name, age, bold }) => {
    return (
        <h1 className={"message" + (!bold ? " header" : "")}>
            I am a message: {name}, {age} years old ;)
        </h1>
    );
};