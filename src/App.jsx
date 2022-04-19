import React, { useState, useEffect } from "react";
import { Form } from "./components/Form/Form";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import "./style.scss";

const AUTHOR = {
  USER: "USER",
  BOT: "BOT",
};

// не видит PropTypes
AUTHOR.propTypes = {
  USER: PropTypes.number,
  BOT: PropTypes.string,
};

const App = () => {
  let [messageList, setMessageList] = useState([]);

  useEffect(() => {
    if (
      messageList.length > 0 &&
      messageList[messageList.length - 1].author !== AUTHOR.BOT
    ) {
      const timeOut = setTimeout(() => {
        setMessageList([
          ...messageList,
          {
            id: nanoid(),
            author: AUTHOR.BOT,
            value: "Hello from bot",
          },
        ]);
      }, 1000);

      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [messageList]);

  const sendMessage = (value) => {
    setMessageList([
      ...messageList,
      {
        id: nanoid(),
        author: AUTHOR.USER,
        value,
      },
    ]);
  };

  return (
    <div className="container">
      <Form addMessage={sendMessage} />
      <h1 className="message">
        {messageList.map((item) => (
          <div key={item.id} className="message__text">
            {item.author}: {item.value}
          </div>
        ))}
      </h1>
    </div>
  );
};

// не видит PropTypes
App.propTypes = {
  sendMessage: PropTypes.number,
};

export { App };
