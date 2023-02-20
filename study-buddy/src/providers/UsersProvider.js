import React, { useState } from "react";
import { users as usersData } from "data/users";
export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(usersData);

  const deleteUser = (name) => {
    const filtredUser = users.filter((user) => user.name !== name);
    setUsers(filtredUser); //w funkcji urzywamy drugiego argumentu z tablicy do któego wkladamy nowy stan w tym przypadku filtred user
  };

  const handleAddUser = (values) => {
    const newUser = {
      name: values.name,
      attendance: values.attendance,
      average: values.average,
    };
    setUsers([newUser, ...users]);
  };
  return (
    <UsersContext.Provider
      value={{
        users,
        handleAddUser,
        deleteUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
export default UsersProvider;
