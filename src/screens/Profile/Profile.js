import {useDispatch, useSelector} from "react-redux";
import {Button} from "@mui/material";
import {toggleCheckbox} from "../../store/profile/actions";

export const Profile = () => {
    const dispatch = useDispatch(); // dispatch - это результат вызова хука useDispatch, этот хук возвращает функцию dispatch
    const state = useSelector(state => state);
    // console.log(state);
    const handleClick = () => {
        dispatch(toggleCheckbox);
    }
    return (
        <>
            <h3>This is Profile
                {state.showName && <span>{state.name}</span>}
            <Button variant={"contained"} onClick={handleClick}>Change show name</Button>
            <div>
                <input type="checkbox" id="checkbox" onClick={handleClick}></input>
                <label htmlFor="checkbox">change show name</label>
            </div>
            </h3>
        </>
    );
}