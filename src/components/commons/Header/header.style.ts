import styled from "styled-components";

const HeaderContainerStyle = styled.header`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  height: 36px;
`;

const HeaderLeftStyle = styled.div`
  flex: 1 1 524px;
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    flex-grow: 0;
  }
  & > i {
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.palette.common.lightRed};
    }
  }
`;
const HeaderRightStyle = styled.div``;

export { HeaderContainerStyle, HeaderLeftStyle, HeaderRightStyle };
