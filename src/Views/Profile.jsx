import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userRef } from "../components/Firebase";
import { checkboxProfile, changeName } from "../store/profile/actions";
import { onValue, update } from "firebase/database";

export const Profile = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.profile.visible);
  const name = useSelector((state) => state.profile.name);

  useEffect(() => {
    onValue(userRef, (snapshot) => {
      const user = snapshot.val();
      dispatch(changeName(user.name || ""));
    });
  }, []);

  const handleChangeName = async () => {
    update(userRef, {
      name: value,
    });
  };

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
        <button onClick={handleChangeName}>Change name</button>
        <p>{name}</p>
      </div>
    </div>
  );
};
