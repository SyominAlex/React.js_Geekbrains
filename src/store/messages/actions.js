export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";

// второй вариант решения: создаем новый экшн
export const INIT_MESSAGES_FOR_CHAT = "MESSAGES::INIT_MESSAGES_FOR_CHAT";

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
