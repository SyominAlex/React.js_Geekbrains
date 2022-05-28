import {onValue, set} from "firebase/database";
import {userNameRef, userShowNameRef} from "../../services/firebase";

export const TOGGLE_CHECKBOX = "PROFILE::TOGGLE_CHECKBOX";
export const SET_NAME = "PROFILE::SET_NAME";

export const toggleCheckbox = {
    type: TOGGLE_CHECKBOX,
};

// payload может быть объектом с любым уровнем вложенности, для упрощения работы с ним придумали action creators
export const setName = (name) => ({
    type: SET_NAME,
    payload: name,
});


/* ниже - экшены, которые используем для Firebase, выше - для Store */

let unsubscribe;

export const initProfileTrack = () => (dispatch) => {
    const unsubscribeName = onValue(userNameRef, (snapshot) => {
        dispatch(setName(snapshot.val()));
    });

    const unsubscribeShowName = onValue(userShowNameRef, () => {
        dispatch(toggleCheckbox);
    });

    unsubscribe = () => {
        unsubscribeName();
        unsubscribeShowName();
    };
};

export const stopProfileTrack = () => () => {
    unsubscribe();
};

export const setNameFB = (name) => () => {
    set(userNameRef, name);
};

export const setShowName = (value) => () => {
    set(userShowNameRef, value);
};
