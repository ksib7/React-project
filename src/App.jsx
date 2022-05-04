import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./Views/Home";
import { Profile } from "./Views/Profile";
import { ChatList } from "./components/ChatList";
import { Provider } from "react-redux";
import { store } from "./store";
import { Chats } from "./Views/Chats";

export const App = () => {
  return (
    <div className="container">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path="profile" element={<Profile />} />
              <Route path="chats">
                <Route index element={<ChatList />} />
                <Route path=":chatId" element={<Chats />} />
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
