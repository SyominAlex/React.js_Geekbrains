export const selectMessages = (state) => state.messages;

export const selectMessagesByChatId = (chatId) => (state) => state.messages[chatId];
