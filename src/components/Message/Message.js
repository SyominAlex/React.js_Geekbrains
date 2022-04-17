import "./Message.styles.css";
import PropTypes from 'prop-types';

export const Message = ({ author, text, theme }) => {
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
