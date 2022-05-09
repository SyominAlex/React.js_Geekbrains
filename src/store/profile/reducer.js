import { TOGGLE_CHECKBOX, SET_NAME } from "./actions";

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
        case SET_NAME: {
            return {
                ...state,
                name: action.payload,
            };
        }
        default:
            return state;
    }
};
