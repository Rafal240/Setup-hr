import React from "react";
import PropTypes from "prop-types";
import { UserShape } from "types";
import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import { StyledList } from "./UserList.styles";
import { Title } from "components/atoms/Title.js/Title";

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <Title>Student List</Title>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};
UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};
export default UsersList;
