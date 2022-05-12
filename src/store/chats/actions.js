import { AUTHOR } from "../../Views/Chats";

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

// Добавление реализации ответа бота (добавление асинхронности с помощью библиотеки redux-thunk)

export const AddMessageWithResponse = (chatId, message) => (dispatch) => {
  dispatch(addMessage(chatId, message));

  if (message.author !== AUTHOR.BOT) {
    let timeout = setTimeout(() => {
      dispatch(
        addMessage(chatId, {
          value: "Hello from bot!",
          author: AUTHOR.BOT,
        })
      );
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }
};
