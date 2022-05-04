import React, { useState } from "react";
import Input from "@mui/material/Input";
import { ButtonEl as Button } from "../Button/ButtonEl";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addMessage } from "../store/chats/actions";

import "./Form.scss";

const ariaLabel = { "aria-label": "description" };

export const Form = () => {
  let [value, setValue] = useState("");
  const chatId = useParams();
  const dispatch = useDispatch();

  const sendForm = (e) => {
    e.preventDefault();

    if (chatId) {
      dispatch(addMessage(chatId, value));
    }

    setValue("");
  };

  return (
    <form className="container form" onSubmit={sendForm}>
      <Input
        autoFocus
        inputProps={ariaLabel}
        required
        className="input"
        type="text"
        placeholder="Введите сообщение . . ."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></Input>
      <Button disabled={!value}>Send message</Button>
    </form>
  );
};
