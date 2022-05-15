import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./Views/Home";
import { Profile } from "./Views/Profile";
import { ChatList } from "./components/ChatList";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { Chats } from "./Views/Chats";
import { PersistGate } from "redux-persist/integration/react";
import { Articles } from "./Views/Articles/Articles";
import { SignIn } from "./Views/SignIn/SignIn";
import { SignUp } from "./Views/SignUp/SignUp";
import { PrivateRoute } from "./components/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute";

export const App = () => {
  return (
    <div className="container">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Header />}>
                <Route index element={<Home />} />
                <Route
                  path="profile"
                  element={
                    <PrivateRoute>
                      <Profile />
                    </PrivateRoute>
                  }
                />
                <Route path="chats">
                  <Route
                    index
                    element={
                      <PrivateRoute>
                        <ChatList />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path=":chatId"
                    element={
                      <PrivateRoute>
                        <Chats />
                      </PrivateRoute>
                    }
                  />
                </Route>
                <Route path="articles" element={<Articles />} />
                <Route
                  path="signin"
                  element={
                    <PublicRoute>
                      <SignIn />
                    </PublicRoute>
                  }
                />
                <Route path="signup" element={<SignUp />} />
                <Route
                  path="*"
                  element={
                    <h1 className="errorEl">Такой страницы не существует...</h1>
                  }
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
};
