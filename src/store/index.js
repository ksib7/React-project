import { createStore, combineReducers, compose } from "redux";
import { chatReducer } from "./chats/reducer";
import { profileReducer } from "./profile/reducer";

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    profile: profileReducer,
    chats: chatReducer,
  }),
  composeEnhancers()
);
