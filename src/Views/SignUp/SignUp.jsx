import React, { useState } from "react";

import { TextField } from "@mui/material";
import { Box } from "@mui/system";

import { ButtonEl as Button } from "../../components/Button/ButtonEl";

import "./SignUp.scss";

export const SignUp = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h2>SignUp</h2>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <form className="form">
          <TextField
            id="outlined-read-only-input"
            label="Login"
            type="text"
            onChange={(e) => setLogin(e.target.value)}
            value={login}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button>Sign up</Button>
        </form>
      </Box>
    </>
  );
};
