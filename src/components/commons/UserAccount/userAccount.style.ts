import styled from "styled-components";

const UserAccountContainerStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

const UserNameStyle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.common.gray2};
`;

const UserIconStyle = styled.i`
  color: ${({ theme }) => theme.palette.common.lightRed};
  font-size: 14px;
`;

export { UserAccountContainerStyle, UserIconStyle, UserNameStyle };
