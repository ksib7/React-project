import React, { useEffect } from "react";
import { Form } from "../components/Form/Form";
import { nanoid } from "nanoid";
import "../style.scss";
import { ChatList } from "../components/ChatList";
import { useParams } from "react-router-dom";
import { MessageList } from "../components/MessageList";

export const AUTHOR = {
  USER: "USER",
  BOT: "BOT",
};

export const Chats = ({
  chatList,
  removeChat,
  onAddChat,
  messageList,
  setMessageList,
}) => {
  const { chatId } = useParams();

  useEffect(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageList]);

  const sendMessage = (value) => {
    if (chatId) {
      // проверяем есть ли наша страница с чатом с определенным ID
      setMessageList({
        ...messageList,
        [chatId]: [
          ...messageList[chatId],
          {
            id: nanoid(),
            author: AUTHOR.USER,
            value,
          },
        ],
      });
    }
  };

  return (
    <div>
      <ChatList
        chatList={chatList}
        onAddChat={onAddChat}
        removeChat={removeChat}
      />
      <Form addMessage={sendMessage} />
      <MessageList messageList={chatId ? messageList[chatId] : []} />
    </div>
  );
};
