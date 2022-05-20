import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { TextField } from "@mui/material";
import { ButtonEl as Button } from "../../components/Button/ButtonEl";
import { logIn } from "../../components/Firebase";
import { changeAuth } from "../../store/profile/actions";

import "./SignIn.scss";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await logIn(email, password);
      dispatch(changeAuth(true));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="formField">
        <TextField
          className="input"
          id="outlined-read-only-input"
          label="Login"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <TextField
          className="textField"
          id="outlined-password-input"
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        {error && <div className="error">{error}</div>}
        <Button>Sign in</Button>
      </form>
    </>
  );
};
