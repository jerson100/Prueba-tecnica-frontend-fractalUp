import styled from "styled-components";

const InputSearchContainerStyle = styled.div`
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.palette.common.gray};
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0.5rem 1rem;
  &:focus-within {
    border-color: ${({ theme }) => theme.palette.common.lightRed};
    transition: border-color ease-in 0.2s;
    color: ${({ theme }) => theme.palette.common.lightRed};
    & > i {
      color: inherit;
      transition: color ease-in 0.2s;
    }
  }
`;

const InputFormStyle = styled.input`
  flex-grow: 1;
  flex-basis: 0;
  height: 18px;
  background-color: inherit;
  border: none;
  outline: 0;
  color: inherit;
  width: 100%;
`;

const IconContainerStyle = styled.i`
  width: 18px;
  height: 18px;
  color: ${({ theme }) => `${theme.palette.common.softGray}`};
`;

export { IconContainerStyle, InputFormStyle, InputSearchContainerStyle };
