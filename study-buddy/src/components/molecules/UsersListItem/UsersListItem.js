import React, { useContext } from "react";
import { StyledAverage, StyledInfo, Wrapper } from "./UserListItem.styles";
import Button from "components/atoms/Button/Button";
import { UsersContext } from "../../../providers/UsersProvider";

const UsersListItem = ({ userData: { average, name, attendance } }) => {
  const { deleteUser } = useContext(UsersContext);
  return (
    <Wrapper>
      <StyledAverage value={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>
          {name}
          <Button onClick={() => deleteUser(name)} />
        </p>

        <p>attendance:{attendance}</p>
      </StyledInfo>
    </Wrapper>
  );
};

export default UsersListItem;
