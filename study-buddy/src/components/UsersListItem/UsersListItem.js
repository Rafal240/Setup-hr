import React from "react";
import PropTypes from "prop-types";
const UsersListItem = ({ userData: { average, name, attendance } }) => (
  <div>
    <li>
      {/* {console.log(props)} */}
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>{attendance}</p>
      </div>
      <button>X</button>
    </li>
  </div>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};
export default UsersListItem;
