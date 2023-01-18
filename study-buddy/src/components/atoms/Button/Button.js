import React from "react";
import { ReactComponent as DeletedIcon } from "../../../assets/icons/delete-icon.svg";
import { StyledButton } from "./Button.styles";

const Button = () => (
  <StyledButton>
    <DeletedIcon />
  </StyledButton>
);

export default Button;
