import styled from "styled-components";

export const AddButton = styled.button`
  margin: 15px 0;
  padding: 10px 25px;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 25px;
  border: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: bold;
`;
