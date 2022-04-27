export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";

export const addMessage = (newMsg, chatId) => ({
    type: ADD_MESSAGE,
    payload: {
        newMsg,
        chatId,
    },
});

