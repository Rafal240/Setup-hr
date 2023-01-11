import React from "react";
import { users } from "data/users";
import UsersListItem from "components/UsersListItem/UsersListItem";

const UsersList = () => (
  <div>
    {users.map((userData) => (
      <UsersListItem userData={userData} />
    ))}
  </div>
);

export default UsersList;
