import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 20px auto;
  padding: 10px;
`;

export const MovieInfo = styled.div`
  gap: 15px;
  display: flex;
`;

export const MovieDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  & ul {
    display: flex;
    gap: 15px;
  }
`;

export const StyledLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  border: solid 1px black;
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 10px;

  :hover {
    color: orangered;
  }
`;