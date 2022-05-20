import React, { useState } from "react";

import { TextField } from "@mui/material";
import { ButtonEl as Button } from "../../components/Button/ButtonEl";

import { signUp } from "../../components/Firebase";

import "./SignUp.scss";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signUp(email, password);
      navigate("/signin");
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
        <Button>Sign up</Button>
      </form>
    </>
  );
};
