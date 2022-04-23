import { TOGGLE_CHECKBOX } from "./actions";

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
        default:
            return state;
    }
};
