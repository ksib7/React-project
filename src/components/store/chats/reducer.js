import { nanoid } from "nanoid";
import { AUTHOR } from "../../../Views/Chats";
import { ADD_CHAT, REMOVE_CHAT, ADD_MESSAGE } from "./actions";

const initialState = {
  Chat: [
    {
      id: "1",
      author: AUTHOR.USER,
      value: "Welcome!",
    },
  ],
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT: {
      return {
        ...state,
        [action.chatName]: [],
      };
    }

    case REMOVE_CHAT: {
      const chats = { ...state };
      delete chats[action.chatId];

      return chats;
    }

    case ADD_MESSAGE: {
      return {
        ...state,
        [action.chatId]: [
          [...state[action.chatId]],
          {
            id: nanoid(),
            author: AUTHOR.USER,
            value: action.message,
          },
        ],
      };
    }

    default:
      return state;
  }
};
