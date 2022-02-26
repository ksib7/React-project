import { Message, MessageEl } from "./Message";
import "./style.scss";

const msg = {
  text: "Text",
};

function App() {
  return (
    <div className="App">
      <Message text={msg.text} />
      <MessageEl text={msg.text} />
    </div>
  );
}

export { App };
