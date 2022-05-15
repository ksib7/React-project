import React from "react";
import { Form } from "../components/Form/Form";
import { ChatList } from "../components/ChatList";
import { Navigate, useParams } from "react-router-dom";
import { MessageList } from "../components/MessageList/MessageList";
import { shallowEqual, useSelector } from "react-redux";
import { selectChatList, selectChats } from "../store/chats/selectors";

import "../style.scss";

export const AUTHOR = {
  USER: "USER",
  BOT: "BOT",
};

export const Chats = () => {
  const { chatId } = useParams();

  const chatList = useSelector(selectChatList);

  const chats = useSelector(selectChats, shallowEqual);

  if (!chatList.find((chat) => chat.name === chatId)) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <div>
      <ChatList />
      <div>
        <Form />
        <MessageList messageList={chatId ? chats[chatId] : []} />
      </div>
    </div>
  );
};
