import {useDispatch, useSelector} from "react-redux";

import {setName, toggleCheckbox} from "../../store/profile/actions";
import {selectName, selectShowName} from "../../store/profile/selectors";
import {Profile} from "./Profile";

export const ProfileContainer = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectName);
    const showName = useSelector(selectShowName);

    const handleClick = () => {
        dispatch(toggleCheckbox);
    };

    const handleSubmit = (text) => {
        console.log('handleSubmit')
        dispatch(setName(text));
    };

    return (
            <Profile
                name={name}
                showName={showName}
                handleClick={handleClick}
                handleSubmit={handleSubmit}
            />
    );
};
