import { ADD_CHAT, DELETE_CHAT } from "./actions";

const initialState = [];

export const chatsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_CHAT: {
            return [...state, payload];
        }
        case DELETE_CHAT: {
            return state.filter(({ id }) => id !== payload);
        }
        default:
            return state;
    }
};
