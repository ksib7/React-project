import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { TextField } from "@mui/material";

import { ButtonEl as Button } from "../../components/Button/ButtonEl";
import { changeAuth } from "../../store/profile/actions";

import "./SignIn.scss";

export const SignIn = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(false);
    if (login === "gb" && password === "gb") {
      dispatch(changeAuth(true));
      setLogin("");
      setPassword("");
    } else {
      setError(true);
      setLogin("");
      setPassword("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <TextField
          className="input"
          id="outlined-read-only-input"
          label="Login"
          type="text"
          onChange={(e) => setLogin(e.target.value)}
          value={login}
        />
        <TextField
          className="input"
          id="outlined-password-input"
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        {error && <div className="error">Логин или пароль введены неверно</div>}
        <Button>Sign in</Button>
      </form>
    </>
  );
};
