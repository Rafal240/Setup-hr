import React from "react";
import Wrapper from "../templates/MainTemplate.style";
import { Navigation } from "components/organisms/Navigation/Navigation";

export const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};
