import { Button, Grid, Tooltip } from "@mui/material";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Link, Outlet } from "react-router-dom";
import { changeAuth } from "../store/profile/actions";

import { logOut } from "./Firebase";

import "./Header.scss";

let navigation = [
  {
    id: 1,
    to: "/",
    name: "Home",
  },
  {
    id: 2,
    to: "/profile",
    name: "Profile",
  },
  {
    id: 3,
    to: "/chats",
    name: "Chats",
  },
  {
    id: 4,
    to: "/articles",
    name: "Articles",
  },
];

export const Header = () => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.profile.auth);

  const handleClickLogOut = async () => {
    try {
      logOut();
      dispatch(changeAuth(false));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <header className="menu">
      <ul className="menu__items">
        {navigation.map((item) => (
          <li key={item.id}>
            <Link to={item.to}>
              <Grid item>
                <Tooltip disableHoverListener title="Add">
                  <Button style={{ fontSize: "30px" }}>{item.name}</Button>
                </Tooltip>
              </Grid>
            </Link>
          </li>
        ))}
      </ul>
      {auth ? (
        <Button variant="outlined" size="small" onClick={handleClickLogOut}>
          Log out
        </Button>
      ) : (
        <>
          <Link className="signin" to="/signin">
            <Button variant="outlined" size="small">
              Sign in
            </Button>
          </Link>
          <Link className="signin" to="/signup">
            <Button variant="outlined" size="small">
              Sign up
            </Button>
          </Link>
          {error && <div className="error">{error}</div>}
        </>
      )}

      <main>
        <Outlet />
      </main>
    </header>
  );
};
