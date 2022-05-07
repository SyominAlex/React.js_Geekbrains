import {AUTHORS} from "../../utils/constants";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";

// второй вариант решения: создаем новый экшн
export const INIT_MESSAGES_FOR_CHAT = "MESSAGES::INIT_MESSAGES_FOR_CHAT";
export const CLEAR_MESSAGES_FOR_CHAT = "MESSAGES::CLEAR_MESSAGES_FOR_CHAT";

export const addMessage = (newMsg, chatId) => ({
    type: ADD_MESSAGE,
    payload: {
        newMsg,
        chatId,
    },
});

export const initMessagesForChat = (chatId) => ({
    type: INIT_MESSAGES_FOR_CHAT,
    payload: chatId,
});

export const clearMessages = (chatId) => ({
    type: CLEAR_MESSAGES_FOR_CHAT,
    payload: chatId,
});

let timeout;

// пример миддлвары на базе thunk
export const addMessageWithReply = (newMsg, chatId) => (dispatch, getState) => {
    const state = getState();
    console.log(state);
    dispatch(addMessage(newMsg, chatId));
    if (newMsg?.author === AUTHORS.human) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            dispatch(
                addMessage({
                    author: AUTHORS.robot,
                    text: "Hello, friend!",
                    id: `msg-${Date.now()}`,
                }, chatId)
            )
        }, 1500);
    }
};