import React from "react";
import { render, screen } from "@testing-library/react";
import { ButtonEl as Button } from "./ButtonEl";
import "@testing-library/jest-dom";

describe("Button", () => {
  it("Component is rendered", () => {
    render(<Button />);
  });

  it("Button contains children prop", () => {
    render(<Button />);
    expect(screen.getByTestId("button")).toHaveProperty("children");
  });

  it("Button is disabled", () => {
    render(<Button disabled />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("render button component with snapshot (remember the mark up)", () => {
    const { asFragment } = render(<Button />);
    expect(asFragment()).toMatchSnapshot();
  });
});
