import { Button } from "@mui/material";
import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { Link, NavLink, Outlet } from "react-router-dom";

import { changeAuth } from "../store/profile/actions";

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
  const auth = useSelector((state) => state.profile.auth);
  const dispatch = useDispatch();

  return (
    <header className="menu">
      <ul className="menu__items">
        {navigation.map((item) => (
          <li key={item.id}>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "green" : "darkgrey",
              })}
              to={item.to}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      {auth ? (
        <Button
          variant="outlined"
          size="small"
          onClick={() => dispatch(changeAuth(false))}
        >
          Log out
        </Button>
      ) : (
        <Link className="signin" to="/signin">
          <Button variant="outlined" size="small">
            Sign in
          </Button>
        </Link>
      )}

      <main>
        <Outlet />
      </main>
    </header>
  );
};
