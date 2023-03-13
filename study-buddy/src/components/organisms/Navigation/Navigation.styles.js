import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  justify-content: flex-start;
  padding: 30px 0;
  grid-row: 1 / 3;
  grid-column: 1/ 1;
`;
export const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => theme.colors.white};
    margin-right: 20px;
    text-align: right;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  margin: 10px 20px;

  &.active {
    color: red;
  }
`;
