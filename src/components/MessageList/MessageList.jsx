import { Card } from "@mui/material";
import React from "react";
import "./MessageList.scss";

export const MessageList = ({ messageList }) => (
  <Card className="block">
    <h1 className="block__message">
      {messageList.map((item) => (
        <div key={item.id} className="block__message__text">
          {item.author}: {item.value}
        </div>
      ))}
    </h1>
  </Card>
);
