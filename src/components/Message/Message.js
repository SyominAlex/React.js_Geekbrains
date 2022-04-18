import "./Message.styles.css";
import PropTypes from 'prop-types';
import {useContext} from "react";
import {ThemeContext} from "../../utils/ThemeContext";

export const Message = ({ author, text }) => {
    const { theme } = useContext(ThemeContext);
    console.log(theme);

    return (
        <div className="message">
            <span style={{ color: theme === "dark" ? "red" : "blue" }}>{author}: </span>
            <span>{text}</span>
        </div>
    );
};

Message.propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string,
}
