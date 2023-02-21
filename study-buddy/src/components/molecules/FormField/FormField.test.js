import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

const InputWithButton = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => setInputValue(e.target.value);

  return (
    <>
      <input value={inputValue} name="Name" id="name" placeholder="Enter your name"></input>
      <button disabled={!inputValue} onChange={handleInputChange}>
        Submit
      </button>
    </>
  );
};

describe("Input With Button", () => {
  it("Renders the compomennt", () => {
    render(<InputWithButton />);
    screen.getAllByText("Submit");
  });

  it("Properly handles value change", () => {
    render(<InputWithButton />);
    const input = screen.getByPlaceholderText("Enter your name");
    fireEvent.change(input, { target: { value: "Kuna" } });
    expect(input).toHaveValue("Kuna");

    // const button = screen.getAllByText("Submit");
    // expect(button).toBeDisabled();
  });
});
