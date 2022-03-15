import React, { useState, useEffect } from "react";
import "./style.scss";

function App() {
  let [messageList, setMessageList] = useState([]);

  useEffect(() => {
    if (messageList[messageList.length - 1] !== "Hello from bot") {
      setTimeout(() => {
        setMessageList([...messageList, "Hello from bot"]);
      }, 700);
    }
  }, [messageList]);

  let inputEl = document.querySelector("input");

  const sendMessage = (message) => {
    if (inputEl.value !== "") {
      setMessageList([...messageList, message]);
    }
  };

  return (
    <div className="container">
      <form className="form" action="#">
        <input
          required
          className="input"
          type="text"
          placeholder="Введите сообщение . . ."
        ></input>
        <button className="btn" onClick={() => sendMessage(inputEl.value)}>
          Send message
        </button>
        <h1 className="message">
          {messageList.map((item) => (
            <div className="message__text">{item}</div>
          ))}
        </h1>
      </form>
    </div>
  );
}

export { App };
