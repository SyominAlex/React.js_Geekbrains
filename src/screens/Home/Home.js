import {Link} from "react-router-dom";

import {LoginForm} from "../../components/LoginForm/LoginForm";

export const Home = ({ onAuth, isSignUp }) => {
    return (
        <>
            <h4>Home page</h4>
            <LoginForm isSignUp={isSignUp} onSubmit={onAuth}/>
            <Link to={isSignUp ? "/" : "/signup"}>
                    {isSignUp ? "to login" : "to signup"}
            </Link>
        </>
    );
};
