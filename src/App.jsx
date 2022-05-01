import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./Views/Home";
import { Profile } from "./Views/Profile";
import { AUTHOR, Chats } from "./Views/Chats";
import { ChatList } from "./components/ChatList";
import { Provider } from "react-redux";
import { store } from "./components/store";

const initialChat = [
  {
    id: "default",
    name: "Chat",
  },
];

const initialMessage = {
  default: [
    {
      id: 1,
      author: AUTHOR.BOT,
      value: "Welcome!",
    },
  ],
};

export const App = () => {
  const [chatList, setChatList] = useState(initialChat);
  const [messageList, setMessageList] = useState(initialMessage);

  const onAddChat = (chat) => {
    setChatList([...chatList, chat]); // добавляем список чатов
    setMessageList({
      ...messageList,
      [chat.id]: [],
    });
  };

  const removeChat = () => {
    /*  const newMessage = { ...messageList };
    delete newMessage[chat];

    setMessageList({
      ...newMessage,
    });
  }; */

    let find = chatList.find((name) => name.id === name);

    setChatList({
      ...chatList.slice(0, find),
      ...chatList.slice(find, +1),
    });
  }; // не работает функция удаления

  return (
    <div className="container">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path="profile" element={<Profile />} />
              <Route path="chats">
                <Route
                  index
                  element={
                    <ChatList
                      chatList={chatList}
                      onAddChat={onAddChat}
                      removeChat={removeChat}
                    />
                  }
                />
                <Route
                  path=":chatId"
                  element={
                    <Chats
                      chatList={chatList}
                      onAddChat={onAddChat}
                      messageList={messageList}
                      setMessageList={setMessageList}
                      removeChat={removeChat}
                    />
                  }
                />
              </Route>
              <Route
                path="*"
                element={
                  <h1 className="error">Такой страницы не существует...</h1>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};
