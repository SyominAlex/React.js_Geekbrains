import "./Message.styles.css";
import PropTypes from 'prop-types';
import {useContext} from "react";
import {ThemeContext} from "../../utils/ThemeContext";

// export const Message = ({ author, text, color = "red" }) => {
export const Message = ({ author, text, theme }) => {
    // const { theme } = useContext(ThemeContext);
    // console.log(theme);

    return (
        <div className="message">
            <span style={{ color: theme === "dark" ? "red" : "blue" }}>{author}: </span>
            {/*<span style={{ color }}>{author}: </span>*/}
            <span>{text}</span>
        </div>
    );
};

Message.propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string,
}

const withBlueColor = (Component) => (props) => {
    return <Component {...props} color="blue" />
}

const withGreenColor = (Component) => (props) => {
    return <Component {...props} color="green" />
}

const withThemeContext = (Component) => (props) => {
    const { theme } = useContext(ThemeContext);
    return <Component {...props} theme={theme} />
}

export const MessageWithBlueColor = withBlueColor(Message);
export const MessageWithGreenColor = withGreenColor(Message);
export const MessageWithThemeContext = withThemeContext(Message);
