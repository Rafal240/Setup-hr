import React from "react";
import { Wrapper, StyledLink, Logo } from "../Navigation/Navigation.styles";

export const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Study
          <br />
          Buddy
        </h1>
      </Logo>
      <StyledLink exact="true" to="/">
        Dashborad
      </StyledLink>
      <StyledLink to="/add-user">AddUser</StyledLink>
      {/* <StyledLink>Settings</StyledLink>
      <StyledLink>Logout</StyledLink> */}
    </Wrapper>
  );
};
