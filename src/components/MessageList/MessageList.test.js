import React from "react";
import "@testing-library/jest-dom";
import { MessageList } from "./MessageList";
import { render } from "@testing-library/react";

describe("MessageList", () => {
  it("Component is rendered", () => {
    <MessageList />;
  });

  it("render MessageList component with snapshot (remember the mark up)", () => {
    const { asFragment } = render(<MessageList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
