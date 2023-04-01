import styled, { css } from "styled-components";
import { ButtonProps } from "../../../styled";
import Color from "color";

const stles = {
  contained: css`
    background-color: ${({ theme }) => theme.palette.common.lightRed};
    border: solid 1px ${({ theme }) => theme.palette.common.lightRed};
    color: ${({ theme }) => theme.palette.common.white};
    &:hover {
      background-color: ${({ theme }) =>
        Color(theme.palette.common.lightRed).darken(0.1).hex()};
      border-color: ${({ theme }) =>
        Color(theme.palette.common.lightRed).darken(0.1).hex()};
    }
  `,
  outlined: css`
    border: solid 1px ${({ theme }) => theme.palette.common.lightRed};
    color: ${({ theme }) => theme.palette.common.lightRed};
    background-color: transparent;
    &:hover {
      border-color: ${({ theme }) =>
        Color(theme.palette.common.lightRed).darken(0.1).hex()};
      color: ${({ theme }) =>
        Color(theme.palette.common.lightRed).darken(0.1).hex()};
    }
  `,
};

const ButtonContainerStyle = styled.button<ButtonProps>`
  outline: 0;
  border-radius: 100px;
  padding: 0.45rem 1.3rem;
  cursor: pointer;
  transition: all 0.2s linear;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  &:active {
    transform: scale(0.8);
  }
  ${(props) => stles[props.variant]}
  ${(props) => props.disabled && DISABLED}
`;

const DISABLED = css`
  cursor: not-allowed;
  background: #d4d4d4;
  color: #f5f5f5;
`;

export { ButtonContainerStyle };
