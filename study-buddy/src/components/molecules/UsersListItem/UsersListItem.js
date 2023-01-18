import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as DeletedIcon } from "../../../assets/icons/delete-icon.svg";
import StyledButton from "../../atoms/Button/Button";
import { Wrapper } from "./UserListItem.styles";

const UsersListItem = ({ userData: { average, name, attendance } }) => (
  <Wrapper>
    {/* {console.log(props)} */}
    <div>{average}</div>
    <div>
      <p>{name}</p>
      <p>{attendance}</p>
    </div>
    <StyledButton>
      <DeletedIcon />
    </StyledButton>
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};
export default UsersListItem;
