import React, { useState } from "react";
import UsersList from "components/organisms/UsersList/UsersList";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../assets/styles/GlobalStyle";
import { theme } from "../assets/styles/theme";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { users as usersData } from "data/users";
import Form from "components/organisms/Form/Form";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
const initialFormState = {
  name: "",
  attendance: "",
  average: "",
};

const App = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initialFormState);

  const deleteUser = (name) => {
    const filtredUser = users.filter((user) => user.name !== name);
    setUsers(filtredUser); //w funkcji urzywamy drugiego argumentu z tablicy do któego wkladamy nowy stan w tym przypadku filtred user
  };
  const handleInputChange = (e) => {
    console.log(formValues);
    setFormValues({
      ...formValues, // Wrzucamy wszystkie poprzednie wartosci tego formularza
      [e.target.name]: e.target.value,
    });

    // a jezeli dochodzi do zmiany wartoci jednego pola to ta zmiana zostanie przypisana do klucza w naszym obiekcie czyt.name attendance average
  };
  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };
    setUsers([newUser, ...users]);
    setFormValues(initialFormState);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/add-user">Add user</Link>
          </nav>
          <Routes>
            <Route
              exact
              path="/add-user"
              element={<Form formValues={formValues} handleAddUser={handleAddUser} handleInputChange={handleInputChange} />}
            ></Route>
            <Route exact path="/" element={<UsersList deleteUser={deleteUser} users={users} />}></Route>
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default App;
