import React from "react";
import { NavLink, Outlet } from "react-router-dom";
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
];

export const Header = () => {
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

      <div>
        <Outlet />
      </div>
    </header>
  );
};
