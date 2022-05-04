import { nanoid } from "nanoid";

export const selectChats = (state) => state.chats;

export const selectChatList = (state) =>
  Object.entries(state.chats).map((chat) => ({
    id: nanoid(),
    name: chat[0],
  }));
