import React, { useState } from "react";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import Input from "@mui/material/Input";
import { ButtonEl as Button } from "./Button/ButtonEl";
import "./ChatList.scss";

const ariaLabel = { "aria-label": "description" };

export const ChatList = ({ chatList, removeChat, onAddChat }) => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name) {
      onAddChat({
        id: nanoid(),
        name,
      });

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
          <Button type="submit">Add chat</Button>
        </form>
        <ul className="list__items">
          {chatList.map((item) => (
            <li className="list__items__chat" key={item.id}>
              <Link to={`/chats/${item.id}`}>{item.name}</Link>
              <button onClick={() => removeChat(item.id)}>x</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
