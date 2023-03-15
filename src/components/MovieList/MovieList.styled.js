import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 0 0 20px 0;
  margin-top: 10px;
`;

export const Item = styled.li`
  overflow: hidden;
  border: solid 1px black;

  & a {
    color: #000000;

    & div {
      text-align: center;
      width: 250px;
      height: 460px;

      & span {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 376px;
        border-bottom: solid 1px black;

        font-size: 30px;
      }
      & img {
        width: 250px;
        margin-bottom: 5px;
        border-bottom: solid 1px black;
      }
    }

    & b {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      font-size: 16px;
    }
  }

  &:hover > a {
    color: red;
  }
`;
