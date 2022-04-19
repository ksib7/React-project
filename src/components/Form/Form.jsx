import React, { useEffect, useState, useRef } from "react";
import Input from "@mui/material/Input";
import { ButtonEl as Button } from "../Button/ButtonEl";
import PropTypes from "prop-types";
import "./Form.scss";

const ariaLabel = { "aria-label": "description" };

export const Form = ({ addMessage }) => {
  let [value, setValue] = useState("");
  const inputRef = useRef(null);

  const sendForm = (event) => {
    event.preventDefault();
    addMessage(value);
    setValue("");
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <form className="form" onSubmit={sendForm}>
      <Input
        ref={inputRef}
        autoFocus
        inputProps={ariaLabel}
        required
        className="input"
        type="text"
        placeholder="Введите сообщение . . ."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></Input>
      <Button />
    </form>
  );
};

Form.propTypes = {
  addMessage: PropTypes.func,
  sendForm: PropTypes.func,
};
