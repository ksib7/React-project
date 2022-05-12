import React from "react";
import "./MessageList.scss";

export const MessageList = ({ messageList }) => (
  <div className="container">
    <h1 className="message">
      {messageList.map((item) => (
        <div key={item.id} className="message__text">
          {item.author}: {item.value}
        </div>
      ))}
    </h1>
  </div>
);
