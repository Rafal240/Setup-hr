import React from "react";
import { renderWithProviders } from "../helpers/renderWithProviders";
import AddUser from "./AddUser";
import Dashboard from "./Dashboard";
import { screen, fireEvent } from "@testing-library/dom";

describe("Form Field", () => {
  it("Renders the component", () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId("Name"), { target: { value: "Andrzej" } });
    fireEvent.change(screen.getByTestId("Attendance"), { target: { value: "35%" } });
    fireEvent.change(screen.getByTestId("Average"), { target: { value: "3.5" } });
    fireEvent.click(screen.getByText("Add"));
    screen.getByText("Andrzej");
  });
});
