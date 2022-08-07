import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 100px;
  padding: 24px;
  margin-bottom: 80px;
  border-bottom: 2px solid #eee0dd;
  box-shadow: 0 1px 20px 0px rgb(51 51 51 / 85%);
`;

export const FlexUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  padding: 12px;
  text-decoration: none;
  font-size: 24px;
  font-weight: 600;
  color: black;
  border-top: 2px dotted transparent;
  border-bottom: 2px dotted transparent;
  :hover {
    color: gray;
  }
  &.active {
    font-weight: 700;
    color: green;
    border-top: 2px dotted green;
    border-bottom: 2px dotted green;
  }
`;
