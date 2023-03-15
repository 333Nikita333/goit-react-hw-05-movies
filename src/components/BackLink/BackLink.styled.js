import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  border: solid 1px black;
  border-radius: 15px;
  padding: 5px;
  margin-bottom: 10px;

  :hover {
    color: orangered;
  }
`;