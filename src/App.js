import { Message } from "./Message";

const msg = {
  text: "Text",
};

function App() {
  return (
    <div className="App">
      <Message text={msg.text} />
    </div>
  );
}

export { App };
