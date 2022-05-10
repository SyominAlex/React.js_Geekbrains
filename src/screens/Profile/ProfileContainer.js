import {useEffect, useState} from "react";
// import {useDispatch} from "react-redux";
// import {useSelector} from "react-redux";
import {onValue, set} from "firebase/database";

import {logOut, userRef} from "../../services/firebase";
// import {toggleCheckbox} from "../../store/profile/actions";
// import {setName} from "../../store/profile/actions";
// import {selectName, selectShowName} from "../../store/profile/selectors";
import {Profile} from "./Profile";

export const ProfileContainer = () => {
    // const dispatch = useDispatch();
    // const name = useSelector(selectName);
    // const showName = useSelector(selectShowName);
    const [name, setName] = useState('');
    const [showName, setShowName] = useState(false);

    const handleClick = () => {
        // dispatch(toggleCheckbox);
        set(userRef, {
            name,
            showName: !showName,
        });
    };

    const handleSubmit = (text) => {
        // dispatch(setName(text)); // меняет данные в сторе
        // если передать null, объект будет удален в БД
        set(userRef, {
            name: text,
            showName,
        });
    };

    useEffect(() => {
        const unsubscribe = onValue(userRef, (snapshot) => {
            // console.log(snapshot.val());
            // console.log(snapshot.key);
            snapshot.forEach((child) => console.log(child.key, child.val()));
            setName(snapshot.val().name);
            setShowName(snapshot.val().showName);
        });

        return unsubscribe;
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
