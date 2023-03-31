import styled, { css } from "styled-components";
import { ButtonProps } from "../../../styled";

const ButtonContainerStyle = styled.button<ButtonProps>`
  background-color: ${({ theme }) => theme.palette.common.lightRed};
  border: solid 1px ${({ theme }) => theme.palette.common.lightRed};
  outline: 0;
  border-radius: 100px;
  padding: 0.45rem 1.3rem;
  cursor: pointer;
  transition: all 0.5s linear;
  color: ${({ theme }) => theme.palette.common.white};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  ${(props) => props.disabled && DISABLED}
`;

const DISABLED = css`
  cursor: not-allowed;
  background: #d4d4d4;
  color: #f5f5f5;
`;

export { ButtonContainerStyle };
