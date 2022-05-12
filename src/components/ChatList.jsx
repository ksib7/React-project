import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "@mui/material/Input";
import { ButtonEl as Button } from "./Button/ButtonEl";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { addChat, removeChat } from "../store/chats/actions";
import { selectChatList } from "../store/chats/selectors";

import "./ChatList.scss";

const ariaLabel = { "aria-label": "description" };

export const ChatList = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const chatList = useSelector(selectChatList, shallowEqual);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name) {
      dispatch(addChat(name));
      setName("");
    }
  };

  return (
    <>
      <div className="list">
        <form onSubmit={handleSubmit}>
          <Input
            inputProps={ariaLabel}
            placeholder="Добавить чат . . ."
            required
            className="input"
            autoFocus
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <Button disabled={!name}>Add chat</Button>
        </form>
        <ul className="list__items">
          {chatList.map((item) => (
            <li className="list__items__chat" key={item.id}>
              <Link to={`/chats/${item.name}`}>{item.name}</Link>
              <button onClick={() => dispatch(removeChat(item.name))}>x</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
