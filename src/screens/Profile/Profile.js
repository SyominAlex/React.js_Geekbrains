import {useDispatch, useSelector} from "react-redux";
// import {Button} from "@mui/material";

import {Form} from "../../components/Form/Form";
import {toggleCheckbox} from "../../store/profile/actions";
import { SET_NAME } from "../../store/profile/actions";


export const Profile = () => {
    const dispatch = useDispatch(); // dispatch - это результат вызова хука useDispatch, этот хук возвращает функцию dispatch

    const state = useSelector(state => state);
    // console.log(state);

    const handleClick = () => {
        dispatch(toggleCheckbox);
    };

    const handleSubmit = (text) => {
        dispatch({
            type: SET_NAME,
            payload: text,
        });
    };

    return (
        <>
            <div className="profile">
                <h3>This is Profile</h3>
                {/*<Button variant={"contained"} onClick={handleClick}>Change show name</Button>*/}
                <div>
                    <input type="checkbox" id="checkbox" onClick={handleClick}></input>
                    <label htmlFor="checkbox">hide name</label>
                </div>
                {state.showName && <span>{state.name}</span>}
                <Form onSubmit={handleSubmit} />
            </div>
        </>
    );
}
