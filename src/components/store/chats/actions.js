export const ADD_CHAT = "CHATS::ADD_CHAT";
export const REMOVE_CHAT = "CHATS::REMOVE_CHAT";
export const ADD_MESSAGE = "CHATS::ADD_MESSAGE";

export const addChat = (chatName) => ({
  type: ADD_CHAT,
  chatName,
});

export const removeChat = (chatId) => ({
  type: REMOVE_CHAT,
  chatId,
});

export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  chatId,
  message,
});
