import Styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = Styled.div<ContainerProps>`

  background: #232129;
  color: #f4ede8;
  border-radius: 10px;

  padding: 16px;
  width: 100%;

  border: 2px solid #233129;
  color: #636360;

  display: flex;
  align-items: center;

  & + div {
        margin-top: 8px;
      }

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}
    ${(props) =>
      props.isFilled &&
      css`
        color: #ff9000;
      `}

  input {
      flex: 1;
      background: transparent;
      border: 0;
      color: #f4ede8;
      &::placeholder {
        color: #636360;
      }


    }

    svg {
      margin-right: 16px;
    }
`;
