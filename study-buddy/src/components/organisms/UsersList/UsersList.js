import React from "react";
import { users as usersData } from "data/users";
import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import { Wrapper, StyledList } from "./UserList.styles";
import { useState, useEffect } from "react";

const mockAPI = () => {
  return new Promise((resoleve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resoleve([...usersData]);
      } else {
        reject({ message: "Error" });
      }
    }, 2000);
  });
};

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    mockAPI().then((data) => {
      console.log(data);
      setIsLoading(false);
      setUsers(data);
    });
  }, []);

  useEffect(() => {
    console.log("Is loading has changed");
  }, [isLoading]);
  //w takiej formie useEffect dziala jak komponentd didMount czyli po załądowaniu jakas funckaj sie wykonuje
  const deleteUser = (name) => {
    const filtredUser = () => users.filter((user) => user.name !== name);
    setUsers(filtredUser); //w funkcji urzywamy drugiego argumentu z tablicy do któego wkladamy nowy stan w tym przypadku filtred user
  };

  return (
    <Wrapper>
      <h1>{isLoading ? "Is Loading..." : "UsersList"}</h1>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
