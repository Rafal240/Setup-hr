import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as DeletedIcon } from "../../../assets/icons/delete-icon.svg";
import StyledButton from "../../atoms/Button/Button";
import { StyledAverage, StyledInfo, Wrapper } from "./UserListItem.styles";

const UsersListItem = ({ userData: { average, name, attendance } }) => (
  <Wrapper>
    {/* {console.log(props)} */}
    <StyledAverage value={average}>{average}</StyledAverage>
    <StyledInfo>
      <p>{name}</p>
      <p>attendance:{attendance}</p>
    </StyledInfo>
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
