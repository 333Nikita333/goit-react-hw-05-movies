import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  & li {
      display: block;
      width: 300px;
      border: solid 1px black;
  }
`;