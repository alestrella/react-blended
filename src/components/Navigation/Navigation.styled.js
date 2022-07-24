import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navlink = styled(NavLink)`
  display: flex;
  padding: 8px 16px;
  width: 250px;
  color: #212121;
  border: 2px solid #212121;
  border-radius: 4px;
  cursor: pointer;

  &.active {
    color: #fff;
    background-color: #212121;
  }

  :hover {
    color: #fff;
    background-color: #212121;
  }
`;
