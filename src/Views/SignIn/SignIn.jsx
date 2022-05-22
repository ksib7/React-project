import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { ButtonEl as Button } from "../../components/Button/ButtonEl";
import { logIn } from "../../components/Firebase";
import { changeAuth } from "../../store/profile/actions";

import { TextField } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

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

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <>
      <form onSubmit={handleSubmit} className="formField">
        <TextField
          className="input"
          id="outlined-read-only-input"
          label="Login"
          type="email"
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
        {error && (
          <Stack spacing={2} sx={{ width: "100%" }}>
            <Alert style={{ marginTop: "20px" }} severity="error">
              {error}
            </Alert>
          </Stack>
        )}
        <Button>Sign in</Button>
      </form>
    </>
  );
};
