import React from "react";
import PropTypes from "prop-types";
import { StyledAverage, StyledInfo, Wrapper } from "./UserListItem.styles";
import Button from "components/atoms/Button/Button";

const showIndex = (index) => alert(`This is student ${index + 1}`);

const UsersListItem = ({ index, userData: { average, name, attendance } }) => (
  <Wrapper>
    <StyledAverage value={average}>{average}</StyledAverage>
    <StyledInfo>
      <p>
        {name}
        <Button onClick={() => showIndex(index)} />
      </p>

      <p>attendance:{attendance}</p>
    </StyledInfo>
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
