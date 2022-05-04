import React /* useEffect */ from "react";
import { Form } from "../components/Form/Form";
import { ChatList } from "../components/ChatList";
import { Navigate, useParams } from "react-router-dom";
import { MessageList } from "../components/MessageList";
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

  /*   useEffect(() => {
    if (
      chatId &&
      messageList[chatId].length > 0 &&
      messageList[chatId][messageList[chatId].length - 1].author !== AUTHOR.BOT
    ) {
      const timeOut = setTimeout(() => {
        setMessageList({
          ...messageList, // раскрываем все сообщения в объекте
          [chatId]: [
            // переходим в наш чат с определенным ID
            ...messageList[chatId], // в чате с определенным ID раскрываем старые сообщения
            {
              // добавляем новое сообщение
              id: nanoid(),
              author: AUTHOR.BOT,
              value: "Hello from bot",
            },
          ],
        });
      }, 1000);

      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [messageList]); */

  if (!chatList.find((chat) => chat.name === chatId)) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <div>
      <ChatList />
      <Form />
      <MessageList messageList={chatId ? chats[chatId] : []} />
    </div>
  );
};
