export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";

// чтобы данные передавать в чат, логично воспользоваться action creator
export const addChat = (newChat) => ({
    type: ADD_CHAT,
    payload: newChat,
});

export const deleteChat = (idToDelete) => ({
    type: DELETE_CHAT,
    payload: idToDelete,
});
