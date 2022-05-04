import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkboxProfile, changeName } from "../store/profile/actions";

export const Profile = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.visible);
  const name = useSelector((state) => state.name);

  return (
    <div>
      <h2>Profile</h2>
      <div>
        <input type="checkbox" checked={visible} />
        <button onClick={() => dispatch(checkboxProfile())}>
          Change checkbox
        </button>
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button onClick={() => dispatch(changeName(value))}>Change name</button>
        <p>{name}</p>
      </div>
    </div>
  );
};
