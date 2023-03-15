import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
  justify-content: center;

  & li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    width: 200px;
    padding: 5px;

    & img {
      margin-right: auto;
      margin-left: auto;
    }
    & span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 150px;
      border: solid 0.5px black;
    }
    & p {
      padding: 5px;
      text-align: center;
      font-size: 16px;
      height: 60px;
    }

    & b {
      text-align: center;
      font-size: 16px;
    }
  }
`;
