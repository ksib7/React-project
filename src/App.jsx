import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./Views/Home";
import { Profile } from "./Views/Profile";
import { Chats } from "./Views/Chats";
import { ChatList } from "./components/ChatList";

const initialChat = [
  {
    id: "1",
    name: "Chat",
  },
];

export const App = () => {
  const [chatList, setChatList] = useState(initialChat);
  const [messageList, setMessageList] = useState([]);
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="chats">
              <Route
                path=":chatId"
                element={
                  <Chats
                    chatList={chatList}
                    onAddChat={setChatList}
                    messageList={messageList}
                    setMessageList={setMessageList}
                  />
                }
              />
              <Route
                index
                element={
                  <ChatList chatList={chatList} onAddChat={setChatList} />
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
    </div>
  );
};
