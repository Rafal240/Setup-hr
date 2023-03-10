import React from "react";
import Wrapper from "./MainTemplate.style";
import { Navigation } from "components/organisms/Navigation/Navigation";
import { SearchBar } from "components/organisms/SearchBar/SearchBar";
import NewsSection from "../NewsSection/NewsSection";

export const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <NewsSection />
    </Wrapper>
  );
};
