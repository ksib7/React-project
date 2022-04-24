import React, { useState, useEffect } from "react";
import { Form } from "../components/Form/Form";
import { nanoid } from "nanoid";
import "../style.scss";
import { ChatList } from "../components/ChatList";
import { useParams } from "react-router-dom";

const AUTHOR = {
  USER: "USER",
  BOT: "BOT",
};

export const Chats = ({ chatList, onAddChat }) => {
  let [messageList, setMessageList] = useState([]);
  const { chatId } = useParams();
  console.log("chatId", chatId);

  useEffect(() => {
    if (
      messageList.length > 0 &&
      messageList[messageList.length - 1].author !== AUTHOR.BOT
    ) {
      const timeOut = setTimeout(() => {
        setMessageList([
          ...messageList,
          {
            id: nanoid(),
            author: AUTHOR.BOT,
            value: "Hello from bot",
          },
        ]);
      }, 1000);

      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [messageList]);

  const sendMessage = (value) => {
    setMessageList([
      ...messageList,
      {
        id: nanoid(),
        author: AUTHOR.USER,
        value,
      },
    ]);
  };

  return (
    <div className="container">
      <ChatList chatList={chatList} onAddChat={onAddChat} />
      <Form addMessage={sendMessage} />
      <h1 className="message">
        {messageList.map((item) => (
          <div key={item.id} className="message__text">
            {item.author}: {item.value}
          </div>
        ))}
      </h1>
    </div>
  );
};
