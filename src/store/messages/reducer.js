import {ADD_MESSAGE} from "./actions";
import {ADD_CHAT} from "../chats/actions";

const initialState = {};

export const messagesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                [payload.chatId]: [...state[payload.chatId], payload.newMsg],
            };
        }
        case ADD_CHAT: {
            return {
                ...state,
                [payload.id]: [],
            };
        }
        default:
            return state;
    }
};
