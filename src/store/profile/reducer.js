<<<<<<< HEAD
import { TOGGLE_CHECKBOX, SET_NAME } from "./actions";
=======
import { TOGGLE_CHECKBOX } from "./actions";
>>>>>>> main

const initialState = {
    showName: false,
    name: "defaultName",
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CHECKBOX: {
            return {
                ...state,
                showName: !state.showName,
            };
        }
<<<<<<< HEAD
        case SET_NAME: {
            return {
                ...state,
                name: action.payload,
            };
        }
=======
>>>>>>> main
        default:
            return state;
    }
};
