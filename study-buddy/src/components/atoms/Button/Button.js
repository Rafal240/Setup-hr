import React from "react";
import { ReactComponent as DeletedIcon } from "../../../assets/icons/delete-icon.svg";
import { StyledButton } from "./Button.styles";

const Button = (props) => (
  <StyledButton {...props}>
    <DeletedIcon />
  </StyledButton>
);

export default Button;
