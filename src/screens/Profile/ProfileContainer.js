import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

import {logOut} from "../../services/firebase";
import {setShowName} from "../../store/profile/actions";
import {setNameFB} from "../../store/profile/actions";
import {selectName, selectShowName} from "../../store/profile/selectors";
import {Profile} from "./Profile";
import {initProfileTrack, stopProfileTrack} from "../../store/profile/actions";

export const ProfileContainer = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectName);
    const showName = useSelector(selectShowName);

    const handleClick = () => {
        dispatch(setShowName(!showName));
    };

    const handleSubmit = (text) => {
        dispatch(setNameFB(text));
    };

    useEffect(() => {
        dispatch(initProfileTrack());

        return () => {
            dispatch(stopProfileTrack());
        };
    }, []);

    return (
            <Profile
                name={name}
                showName={showName}
                onLogout={logOut}
                handleClick={handleClick}
                handleSubmit={handleSubmit}
            />
    );
};
