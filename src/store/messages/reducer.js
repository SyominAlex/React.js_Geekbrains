import {ADD_MESSAGE, CLEAR_MESSAGES_FOR_CHAT, INIT_MESSAGES_FOR_CHAT} from "./actions";
// import {ADD_CHAT} from "../chats/actions";

const initialState = {};

export const messagesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                [payload.chatId]: [...state[payload.chatId], payload.newMsg],
            };
        }
        // case ADD_CHAT: {
        //     return {
        //         ...state,
        //         [payload.id]: [],
        //     };
        // }
        // второй вариант решения:
        case INIT_MESSAGES_FOR_CHAT: {
            return {
                ...state,
                [payload]: [], // chatId здесь уже в payload, поэтому получать его не нужно
            };
        }
        case CLEAR_MESSAGES_FOR_CHAT: {
            const copy = { ...state };
            delete copy[payload];
            return copy;
        }
        default:
            return state;
    }
};
