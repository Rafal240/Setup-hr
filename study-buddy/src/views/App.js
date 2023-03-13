import React from "react";
import { Wrapper } from "./App.styles";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../assets/styles/GlobalStyle";
import { theme } from "../assets/styles/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "../views/AddUser";
import { MainTemplate } from "components/templates/MainTemplate/MainTemplate";
import Dashboard from "./Dashboard";
import UsersProvider from "providers/UsersProvider";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersProvider>
            <Wrapper>
              <Routes>
                <Route exact path="/add-user" element={<AddUser />}></Route>
                <Route exact path="/" element={<Dashboard />}></Route>
              </Routes>
            </Wrapper>
          </UsersProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default App;
