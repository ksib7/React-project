import React from "react";
import "./style.scss";

function Message(props) {
  return (
    <div className="text">
      Message: <span className="text__message">{props.text}</span>
    </div>
  );
}

export { Message };
