import styled, { css } from "styled-components";
import { Input, Button as ButtonAnt } from "antd";

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputStyled = styled(Input)`
  margin-top: ${({ $isAddColumn }) => ($isAddColumn ? "8px" : "auto")};
  width: ${({ $isAddColumn }) => ($isAddColumn ? "auto" : "100%")};
`;

export const Button = styled(ButtonAnt)`
  margin-top: ${({ $isAddColumn }) => ($isAddColumn ? "8px" : "auto")};
  width: ${({ $isAddColumn }) => ($isAddColumn ? "auto" : "100%")};
  background-color: ${({ $isAddColumn }) =>
    $isAddColumn ? "#ebecf0" : "transparent"};
  border: none;
  text-align: left;
  padding-left: 8px;

  ${({ $isAddColumn }) =>
    !$isAddColumn &&
    css`
      :hover {
        background-color: transparent;
      }
    `}
`;

export const ButtonConfirm = styled(ButtonAnt)`
  margin-top: 5px;
  width: 100%;
`;
