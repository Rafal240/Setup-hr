import React from "react";
import FormField from "./FormField";
import { renderWithProviders } from "../../../helpers/renderWithProviders";

describe("FormField", () => {
  it("Render Component", () => {
    renderWithProviders(<FormField label="Name" name="name" id="name" />);
  });
});
